export function simulateAsyncOperation(done) {
    setTimeout(() => {
        done();
    }, 3000); // Temps d'attente de 3 secondes pour l'exemple
}

// Fonction pour générer des valeurs aléatoires pour les capteurs
export function generateRandomData(option) {
    let min;
    let max;
    switch (option) {
        case "heartRate":
            min = 40;
            max = 140;
            break;
        case "glucose":
            min = 0.3;
            max = 1.5;
            break;
        case "bodyTemperature":
            min = 30;
            max = 45;
            break;
        case "bloodPressure":
            min = 70;
            max = 130;
            break;
        case "accelerometer":
            min = 0;
            max = 20;
            break;
        default:
            throw new Error("Option invalide pour la génération de données aléatoires");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fonction qui met à jour les états de chaque donnée
export function setStates(option, value) {
    let state = "NORMAL";
    let danger = "normal";
    switch (option) {
        case "heartRate":
            if (value > 120) {
                state = "BEAUCOUP TROP HAUT";
                danger = "grave";
            } else if (value > 100) {
                state = "TROP HAUT";
                danger = "moyen";
            } else if (value < 60) {
                state = "BEAUCOUP TROP BAS";
                danger = "grave";
            } else if (value < 80) {
                state = "TROP BAS";
                danger = "moyen";
            }
            break;
        case "glucose":
            if (value > 1.3) {
                state = "BEAUCOUP TROP HAUT"
                danger = "grave";
            } else if (value > 1.1) {
                state = "TROP HAUT"
                danger = "moyen";
            } else if (value < 0.5) {
                state = "BEAUCOUP TROP BAS"
                danger = "grave";
            } else if (value < 0.7) {
                state = "TROP BAS"
                danger = "moyen";
            }
            break;
        case "bodyTemperature":
            if (value > 42) {
                state = "BEAUCOUP TROP HAUT"
                danger = "grave";
            } else if (value > 39) {
                state = "TROP HAUT"
                danger = "moyen";
            } else if (value < 36) {
                state = "BEAUCOUP TROP BAS"
                danger = "grave";
            } else if (value < 33) {
                state = "TROP BAS"
                danger = "moyen";
            }
            break;
        case "bloodPressure":
            if (value > 120) {
                state = "BEAUCOUP TROP HAUT"
                danger = "grave";
            } else if (value > 110) {
                state = "TROP HAUT"
                danger = "moyen";
            } else if (value < 80) {
                state = "BEAUCOUP TROP BAS"
                danger = "grave";
            } else if (value < 90) {
                state = "TROP BAS"
                danger = "moyen";
            }
            break;
    }
    return [state, danger];
}
