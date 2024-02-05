import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORTBd = 3306;
const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASSWORD = 'am001541';
const DB_DATABASE = 'medecare';

const PORTCapteurs = 8080;
const API_URL_SERVVITE = 'http://localhost:5173';

// Configuration du serveur Express
const app2 = express();
const portBd = PORTBd;
const port = PORTCapteurs;

app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({ extended: true }));

// Configuration CORS pour les routes
const corsOptions = {
    origin: API_URL_SERVVITE,
};

app2.use(cors(corsOptions));
app2.use(express.json());

describe('Test des requêtes HTTP et vers la DB', () => {
    test('Devrait ajouter un malade avec un ID spécifique', async () => {
        const idUtilisateur = 1000;

        // Effectuer la requête SQL pour ajouter un utilisateur
        const addUtilisateur = new Promise((resolve, reject) => {
            const db = mysql.createConnection({
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_DATABASE,
                port: portBd,
            });

            const sqlQuery = 'INSERT INTO Utilisateurs (id) VALUES (?)';
            db.query(sqlQuery, [idUtilisateur], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Utilisateur ajouté avec succès');
                    resolve();
                }
            });
        });

        await Promise.all([addUtilisateur]);

        // Effectuer la requête SQL pour ajouter un capteur à l'utilisateur
        const addCapteur = new Promise((resolve, reject) => {
            const db = mysql.createConnection({
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_DATABASE,
                port: portBd,
            });

            const sqlQuery = 'INSERT INTO Capteurs (utilisateur_id) VALUES (?)';
            db.query(sqlQuery, [idUtilisateur], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Ligne de capteurs ajoutée avec succès');
                    resolve();
                }
            });
        });

        // Attendre que les deux requêtes SQL soient terminées
        await Promise.all([addCapteur]);

        try {
            const response = await fetch('http://localhost:8080/capteurs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idUserMalade: idUtilisateur }),
            });

            expect(response.status).toBe(200); // Vérifier si le statut de la réponse est OK
            const responseData = await response.json();
            expect(responseData).toHaveLength(1);
            expect(responseData[0].utilisateur_id).toBe(idUtilisateur);
            expect(responseData[0].pression_danger).toBe(null);
        } catch (error) {
            console.error('Erreur récupération capteurs:', error.message);
        }

        // Supression des lignes rajoutées dans la db
        const removeCapteurDB = new Promise((resolve, reject) => {
            const db = mysql.createConnection({
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_DATABASE,
                port: portBd,
            });
            const sqlQuery = 'DELETE FROM Capteurs WHERE utilisateur_id = ?';
            db.query(sqlQuery, [idUtilisateur], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Ligne de capteur supprimée avec succès');
                    resolve();
                }
            });
        });

        await Promise.all([removeCapteurDB]);

        const removeUtilisateurDB = new Promise((resolve, reject) => {
            const db = mysql.createConnection({
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_DATABASE,
                port: portBd,
            });
            const sqlQuery = 'DELETE FROM Utilisateurs WHERE id = ?';
            db.query(sqlQuery, [idUtilisateur], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Ligne d\'utilisateur supprimée avec succès');
                    resolve();
                }
            });
        });

        await Promise.all([removeUtilisateurDB]);
    }, 15000); // Timeout de 15 secondes pour ce test
});