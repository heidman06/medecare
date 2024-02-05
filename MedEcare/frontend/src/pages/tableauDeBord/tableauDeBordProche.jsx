import React, { useEffect, useState } from "react";
import * as jose from "jose";
import "../../composantsCss/tableauDeBord.scss";
import { useNavigate } from "react-router-dom";
import Deconnexion from "../../composants/Deconnexion.jsx";
import imgLogo from "../../public/assets/Logo_MedECare_LightV.png";

function TableauDeBordProche() {
  const navigate = useNavigate();
  const [maladeId, setMaladeId] = useState();
  const [capteursData, setCapteursData] = useState({});

  useEffect(() => {
    // récupère le jeton de connexion
    const token = localStorage.getItem("token");

    // Si la personne n'est pas connecté donc n'a pas de jeton
    if (!token) {
      navigate('/login_proche');
    } else {
      const decodedToken = jose.decodeJwt(token);

      if (decodedToken) {
        fetchMalade(decodedToken.idProche);
      }
    }

    if (maladeId !== "") {
      fetch(`${import.meta.env.VITE_API_URL_CAPTEURS}/startCapteurs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ maladeId: maladeId }),
      }).then(console.log("Capteurs démarrés"));

      // Set up an interval to fetch updates every 15 seconds
      const intervalId = setInterval(() => {
        fetchCapteurs(maladeId);
      }, 15000);

      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [maladeId, navigate]);

  const fetchMalade = async (idProche) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/malade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idProche }),
      });

      if (!response.ok) {
        throw new Error("Erreur récupération malade");
      }

      const data = await response.json();
      setMaladeId(data);
    } catch (error) {
      console.error("Erreur récupération malade:", error.message);
    }
  };

  const fetchCapteurs = async (maladeId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_CAPTEURS}/capteurs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUserMalade: maladeId }),
      });

      if (!response.ok) {
        throw new Error("Erreur récupération capteurs");
      }

      const data = await response.json();
      if (Object.keys(data).length > 0) {
        setCapteursData(data[0]);
      }
    } catch (error) {
      console.error("Erreur récupération capteurs:", error.message);
    }
  };

  const handleLogo = () => {
    navigate("/tableau_de_bord_proche");
  };

  const handleHistorique = () => {
    navigate("/historique");
  };

  const handleRenseignements = () => {
    navigate("/renseignements");
  };

  const handleUrgence = () => {
    navigate("/urgence");
  };

  return (
    <div className="tableau-de-bord-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand" onClick={handleLogo}>
          <img
            src={imgLogo}
            alt="Logo de l'application"
            className="app-logo-V1"
          />
          <h1 className="title">MedECare</h1>
        </div>

        <div className="center-title">
          <h2>TABLEAU DE BORD</h2>
        </div>

        <Deconnexion
          onDeconnexion={() => {
            alert("Vous êtes déconnecté(e)");
            navigate("/login_proche");
          }}
        />
      </nav>

      {/* CONTENT */}
      <div className="content-container">
        {/* BOUTONS A GAUCHE */}
        <div className="button-column">
          <button className="column-button urgence" onClick={handleUrgence}>
            SIGNALER UNE <br></br> URGENCE
          </button>
          <button
            className="column-button renseignement"
            onClick={handleRenseignements}
          >
            AVOIR DES <br></br> RENSEIGNEMENTS
          </button>
          <button
            className="column-button consulte-historique"
            onClick={handleHistorique}
          >
            CONSULTER SES <br></br> PRÉCÉDANTES <br></br> CONSULTATIONS
          </button>
          <button className="column-button infos-personnels">
            MODIFIER MES <br></br> INFORMATIONS <br></br> PERSONNELLES
          </button>
        </div>

        {/* SECTION DROITE */}
        <div className="right-container">
          {/* PARTIE CAPTEURS */}
          <div className="capteurs-container right-subcontainer">
            {/* TITRE CAPTEURS */}
            <div className="capteurs-top-part">
              <div className="capteurs-left-part"></div>
              <div className="capteurs-middle-part">
                <div className="center big-text">
                  Utilisateur : {maladeId}
                </div>
                <div className="center middle-text">
                  DERNIERE MISE A JOUR LE : {capteursData.derniere_maj}
                </div>
              </div>
              <div className="capteurs-right-part">
                <a href={`/details_malade_proche/${maladeId}`} className="big-text">
                  VOIR PLUS
                </a>
              </div>
            </div>

            {/* CONTENUE CAPTEURS */}
            <div className="capteurs-bottom-part">
              <div className="grid-container">
                <div className="grid-item">
                  <div>
                    <div>RYTHME CARDIAQUE</div>
                    <div className={`valeur-capteur-${capteursData.coeur_danger}`}>{capteursData.coeur_etat}</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div>
                    <div>GLICÉMIE</div>
                    <div className={`valeur-capteur-${capteursData.glucose_danger}`}>{capteursData.glucose_etat}</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div>
                    <div>TEMPÉRATURE</div>
                    <div className={`valeur-capteur-${capteursData.temperature_danger}`}>{capteursData.temperature_etat}</div>
                  </div>
                </div>
                <div className="grid-item">
                  <div>
                    <div>PRESSION ARTÉRIELLE</div>
                    <div className={`valeur-capteur-${capteursData.pression_danger}`}>{capteursData.pression_etat}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PARITE TRAITEMENTS (pour V3) */}
          <div className="traitement-container right-subcontainer">
            {/* TITRE TRAITEMENTS */}
            <div className="traitement-top-part">
              <div className="traitement-left-part"></div>
              <div className="traitement-middle-part">
                <div className="center big-text">LES TRAITEMENTS DE l'Utilisateur {maladeId}</div>
              </div>
              <div className="traitement-right-part">
                <a href="" className="big-text">
                  VOIR PLUS
                </a>
              </div>
            </div>

            {/* PARTIE TRAITEMENT */}
            <div className="traitement-bottom-part">
              <table className="traitement-table">
                <thead>
                  <tr>
                    <th className="jour-semaine">LUNDI</th>
                    <th className="jour-semaine">MARDI</th>
                    <th className="jour-semaine">MERCREDI</th>
                    <th className="jour-semaine">JEUDI</th>
                    <th className="jour-semaine">VENDREDI</th>
                    <th className="jour-semaine">SAMEDI</th>
                    <th className="jour-semaine">DIMANCHE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="medoc-lundi ligne-1">Médicament 1</td>
                    <td className="medoc-mardi ligne-1">Médicament 1</td>
                    <td className="medoc-mercredi ligne-1">Médicament 1</td>
                    <td className="medoc-jeudi ligne-1">Médicament 1</td>
                    <td className="medoc-vendredi ligne-1">Médicament 1</td>
                    <td className="medoc-samedi ligne-1">Médicament 1</td>
                    <td className="medoc-dimance ligne-1">Médicament 1</td>
                  </tr>
                  <tr>
                    <td className="medoc-lundi ligne-2">Médicament 2</td>
                    <td className="medoc-mardi ligne-2"></td>
                    <td className="medoc-mercredi ligne-2">Médicament 2</td>
                    <td className="medoc-jeudi ligne-2">Médicament 2</td>
                    <td className="medoc-vendredi ligne-2"></td>
                    <td className="medoc-samedi ligne-2">Médicament 2</td>
                    <td className="medoc-dimance ligne-2">Médicament 2</td>
                  </tr>
                  <tr>
                    <td className="medoc-lundi ligne-3">Médicament 3</td>
                    <td className="medoc-mardi ligne-3"></td>
                    <td className="medoc-mercredi ligne-3"></td>
                    <td className="medoc-jeudi ligne-3">Médicament 3</td>
                    <td className="medoc-vendredi ligne-3"></td>
                    <td className="medoc-samedi ligne-3">Médicament 3</td>
                    <td className="medoc-dimance ligne-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default TableauDeBordProche;
