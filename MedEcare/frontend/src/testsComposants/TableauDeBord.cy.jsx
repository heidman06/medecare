import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TableauDeBordMalade from "../pages/tableauDeBord/tableauDeBordMalade";
import TableauDeBordMedecin from "../pages/tableauDeBord/tableauDeBordMedecin";
import TableauDeBordProche from "../pages/tableauDeBord/tableauDeBordProche";

describe("renders login", () => {
  // TABLEAU DE BORD MALADE
  it("tableau de bord malade", () => {
    cy.mount(
      <Router>
        <TableauDeBordMalade />
      </Router>
    );
    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "TABLEAU DE BORD");

    cy.get(".button-column .urgence").should("be.visible");
    cy.get(".button-column .e-consultation").should("be.visible");
    cy.get(".button-column .renseignement").should("be.visible");
    cy.get(".button-column .consulte-historique").should("be.visible");
    cy.get(".button-column .infos-personnels").should("be.visible");

    cy.get(".capteurs-top-part a").should("contain", "VOIR PLUS");

    cy.get(".capteurs-bottom-part .grid-item").should(
      "contain",
      "RYTHME CARDIAQUE"
    );
    cy.get(".capteurs-bottom-part .grid-item").should("contain", "GLICÉMIE");
    cy.get(".capteurs-bottom-part .grid-item").should("contain", "TEMPÉRATURE");
    cy.get(".capteurs-bottom-part .grid-item").should(
      "contain",
      "PRESSION ARTÉRIELLE"
    );

    cy.get(".traitement-top-part a").should("contain", "VOIR PLUS");
  });

  // TABLEAU DE BORD PROCHE
  it("tableau de bord proche", () => {
    cy.mount(
      <Router>
        <TableauDeBordProche />
      </Router>
    );
    cy.get("h1").should("contain", "MedECare");
    cy.get("h2").should("contain", "TABLEAU DE BORD");

    cy.get(".button-column .urgence").should("be.visible");
    cy.get(".button-column .renseignement").should("be.visible");
    cy.get(".button-column .consulte-historique").should("be.visible");
    cy.get(".button-column .infos-personnels").should("be.visible");

    cy.get(".capteurs-top-part a").should("contain", "VOIR PLUS");

    cy.get(".capteurs-bottom-part .grid-item").should(
      "contain",
      "RYTHME CARDIAQUE"
    );
    cy.get(".capteurs-bottom-part .grid-item").should("contain", "GLICÉMIE");
    cy.get(".capteurs-bottom-part .grid-item").should("contain", "TEMPÉRATURE");
    cy.get(".capteurs-bottom-part .grid-item").should(
      "contain",
      "PRESSION ARTÉRIELLE"
    );

    cy.get(".traitement-top-part a").should("contain", "VOIR PLUS");
  });

  // TABLEAU DE BORD MEDECIN
  it("tableau de bord médecin", () => {
    cy.mount(
      <Router>
        <TableauDeBordMedecin />
      </Router>
    );
  });
});
