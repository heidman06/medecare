import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RegisterMalade from "../pages/register/registerMalade";
import RegisterMedecin from "../pages/register/registerMedecin";
import RegisterProche from "../pages/register/registerProche";

describe("renders login", () => {
  // REGISTER MALADE
  it("register malade", () => {
    cy.mount(
      <Router>
        <RegisterMalade />
      </Router>
    );

    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "Inscription espace malade");
    cy.get(".register-main-part").should("contain", "Entrer votre nom");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer votre prénom");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should(
      "contain",
      "Entrer votre numéro de carte vitale"
    );
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer votre adresse");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should(
      "contain",
      "Entrez votre date de naissance"
    );
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer votre genre");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should(
      "contain",
      "Entrez le numero de votre medecin traitant"
    );
    cy.get("input").should("be.visible");

    cy.get(".submit-btn").should("contain", "Créer le compte");

    cy.get(".register-main-part a").should("contain", "Retour");
  });

  // REGISTER MEDECIN
  it("register médecin", () => {
    cy.mount(
      <Router>
        <RegisterMedecin />
      </Router>
    );

    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "Inscription espace médecin");
    cy.get(".register-main-part").should("contain", "Entrer votre nom");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer votre prénom");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should(
      "contain",
      "Entrer votre numéro de médecin"
    );
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should(
      "contain",
      "Entrer une adresse de profession"
    );
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer votre spécialité");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer un mot de passe");
    cy.get("input").should("be.visible");

    cy.get(".submit-btn").should("contain", "Créer le compte");

    cy.get(".register-main-part a").should("contain", "Retour");
  });

  // REGISTER PROCHE
  it("register proche", () => {
    cy.mount(
      <Router>
        <RegisterProche />
      </Router>
    );

    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "Inscription espace proche");
    cy.get(".register-main-part").should("contain", "Entrer le nom du proche");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should(
      "contain",
      "Entrer votre numéro de carte vitale du proche"
    );
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer votre nom");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should("contain", "Entrer votre prénom");
    cy.get("input").should("be.visible");
    cy.get(".register-main-part").should(
      "contain",
      "Quelle est votre lien avec votre proche"
    );
    cy.get("select").should("be.visible");
    cy.get("select option").should("contain", "Conjoint");
    cy.get("select option").should("contain", "Parent");
    cy.get("select option").should("contain", "Frère/soeur");
    cy.get("select option").should("contain", "Fils/Fille");
    cy.get("select option").should("contain", "Responsable légal");
    cy.get("select option").should("contain", "Autre lien");

    cy.get(".submit-btn").should("contain", "Créer le compte");
    cy.get(".register-main-part a").should("contain", "Retour");
  });
});
