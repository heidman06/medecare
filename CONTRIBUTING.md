### Mohamed Reda:
- Mise en place de l'architecture.
- Création de la base de données (Mise en place des tables et architecture de celle-ci) en local et sur la VM.
- Mise en place du Docker Compose en local.
- Mise en place de la PWA avec un service worker.
- Configuration de la pipeline : configuration de la majorité de la pipeline et optimization.
- Mise en place du front-end.
- **Back-end:**
  - Mise en place du backend avec la réalisation de toute la partie inscription.
  - Liaison entre le backend et le frontend sur toutes les vues nécessaires.
  - Affichage des capteurs dans l'espace patient et médecin.
  - Stratégie complète pour les formulaires.
  - Création de tokens de session pour accéder aux pages nécessaires.

### Thomas:

- Réalisation de toutes les maquettes sur Figma.
- **Front-end:**
  - Réalisation de toutes les vues en responsive.
  - Création des routes associées pour les redirections en fonction du token généré.
- **Back-end:**
  - Logique et vérification avec la base de données.
  - Gestion des connexions et affichage des capteurs du patient sur le tableau de bord et sur la page détail dans l'espace professionnel.
- **Tests:**
  - Réalisation de tous les tests fonctionnels (19 tests).
  - Vérification si les composants sont correctement chargés et si leur contenu est présent.
- Ajout de commentaires dans tout le code.


### Matthieu:

- Simulation des capteurs avec des données aléatoires.
- Réalisation de l'historique des capteurs et des consultations.
- **Tests unitaires:**
  - Deux tests avec un contrôleur simulant les capteurs.
  - Tests vérifiant que les données sont correctes.
- **Test d'intégration:**
  - Testant les requêtes HTTP et la base de données.
  - Ajout d'un patient dans la base de données sur un serveur de test Express.
- Réalisation de ses diapositives pour la partie démo.

### Vincent:

- Configuration d'Azure.
- Intégration de la clé SSH dans la pipeline et  pour se connecter à la VM (production).
- Gestion de toute la partie SonarQube.
- Configuration du push vers Docker Hub.
