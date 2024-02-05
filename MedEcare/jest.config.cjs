module.exports = {
    // Liste des chemins où Jest recherche les tests
    testMatch: ['**/testsUnitaires/**/*.test.mjs'],
    // Le dossier où Jest doit générer ses rapports de couverture ( se crée si n'existe pas )
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '^.+\\.m?js$': 'babel-jest',
    },
};
