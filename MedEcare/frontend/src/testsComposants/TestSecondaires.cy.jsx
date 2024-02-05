import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home.jsx";
import Deconnexion from "../composants/Deconnexion.jsx";
import DetailsPatient from "../pages/tableauDeBord/details/detaitPatient.jsx";
import DetailsMalade from "../pages/tableauDeBord/details/detaitMalade.jsx";
import DetailsMaladeProche from "../pages/tableauDeBord/details/detaitMaladeProche.jsx";
import HistoriqueMalade from "../pages/tableauDeBord/historique/historiqueMalade.jsx";
import Renseignements from "../pages/tableauDeBord/renseignements/renseignements.jsx";
import Urgence from "../pages/tableauDeBord/urgence/urgence.jsx";
import ResultatsConsultation from "../pages/tableauDeBord/eConsultation/ResultatsConsultation.jsx";

describe("render secondaires", () => {
  // Home
  it("Home", () => {
    cy.mount(
      <Router>
        <Home />
      </Router>
    );
  });

  // Deconnexion
  it("Deconnexion", () => {
    cy.mount(
      <Router>
        <Deconnexion />
      </Router>
    );
  });

  // Details Patient
  it("Details Patient", () => {
    cy.mount(
      <Router>
        <DetailsPatient />
      </Router>
    );
  });

  // Details Malade
  it("Details Malade", () => {
    cy.mount(
      <Router>
        <DetailsMalade />
      </Router>
    );
  });

  // Details Malade Proche
  it("Details Malade Proche", () => {
    cy.mount(
      <Router>
        <DetailsMaladeProche />
      </Router>
    );
  });

  // Historique Malade
  it("Historique Malade", () => {
    cy.mount(
      <Router>
        <HistoriqueMalade />
      </Router>
    );
  });

  // Renseignements
  it("Renseignements", () => {
    cy.mount(
      <Router>
        <Renseignements />
      </Router>
    );
  });

  // Urgence
  it("Urgence", () => {
    cy.mount(
      <Router>
        <Urgence />
      </Router>
    );
  });

  // Resultats Consultation
  it("Resultats Consultation", () => {
    cy.mount(
      <Router>
        <ResultatsConsultation />
      </Router>
    );
  });
});
