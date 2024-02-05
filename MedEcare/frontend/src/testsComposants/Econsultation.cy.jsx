import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EConsultation from "../pages/tableauDeBord/eConsultation/eConsultation";

describe("EConsultation", () => {
  // eConsultation
  it("EConsultation", () => {
    cy.mount(
      <Router>
        <EConsultation />
      </Router>
    );

    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "E CONSULTATION");
    cy.get(".submit-btn").should("contain", "Envoyer la consultation");
    cy.get(".econsultation-form a").should("contain", "Retour");
  });
});
