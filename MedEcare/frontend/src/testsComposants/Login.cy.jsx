import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginMalade from "../pages/login/LoginMalade.jsx";
import LoginMedecin from "../pages/login/LoginMedecin.jsx";
import LoginProche from "../pages/login/LoginProche.jsx";

describe("renders login", () => {
  // LOGIN MALADE
  it("login malade", () => {
    cy.mount(
      <Router>
        <LoginMalade />
      </Router>
    );
    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "Connexion espace malade");
    cy.get(".login-main-part").should("contain", "Entrer votre nom");
    cy.get("input").should("be.visible");
    cy.get(".login-main-part").should(
      "contain",
      "Entrer votre numéro de carte vitale"
    );
    cy.get("input").should("be.visible");
    cy.get(".buttons-container button").should("contain", "Se connecter");
    cy.get(".buttons-container button").should("contain", "Créer un compte");

    cy.get(".login-main-part a").should("contain", "Retour");
  });

  // LOGIN MEDECIN
  it("login médecin", () => {
    cy.mount(
      <Router>
        <LoginMedecin />
      </Router>
    );
    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "Connexion espace médecin");
    cy.get(".login-main-part").should("contain", "Entrer votre identifiant");
    cy.get("input").should("be.visible");
    cy.get(".login-main-part").should("contain", "Entrer votre mot de passe");
    cy.get("input").should("be.visible");
    cy.get(".buttons-container button").should("contain", "Se connecter");
    cy.get(".buttons-container button").should("contain", "Créer un compte");

    cy.get(".login-main-part a").should("contain", "Retour");
  });

  // LOGIN PROCHE
  it("login proche", () => {
    cy.mount(
      <Router>
        <LoginProche />
      </Router>
    );
    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "Connexion espace proche");
    cy.get(".login-main-part").should("contain", "Entrer le nom du proche");
    cy.get("input").should("be.visible");
    cy.get(".login-main-part").should("contain", "Entrer le code du proche");
    cy.get("input").should("be.visible");
    cy.get(".buttons-container button").should("contain", "Se connecter");
    cy.get(".buttons-container button").should("contain", "Créer un compte");

    cy.get(".login-main-part a").should("contain", "Retour");
  });
});
