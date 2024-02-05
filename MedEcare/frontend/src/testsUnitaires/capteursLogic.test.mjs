// Import des fonctions à tester depuis le fichier capteursLogic.js
import { simulateAsyncOperation, setStates } from './capteursLogic';

describe('simulateAsyncOperation', () => {
  test('should resolve after a delay', (done) => {
    const startTime = Date.now();
    simulateAsyncOperation(() => {
      const endTime = Date.now();
      const elapsedTimeInSeconds = (endTime - startTime) / 1000;
      expect(elapsedTimeInSeconds).toBeGreaterThanOrEqual(3);
      done();
    });
  });
});

describe('setStates', () => {
  test('should set states and danger level for different options', () => {
    const heartRateResult = setStates('heartRate', 130);
    expect(heartRateResult).toEqual(['BEAUCOUP TROP HAUT', 'grave']);

    const glucoseResult = setStates('glucose', 0.8);
    expect(glucoseResult).toEqual(['NORMAL', 'normal']);

    // ... Ajouter d'autres tests pour les autres options de setStates
  });
});
