import { StateApproveObjectValue } from './state-approve.value-object';

describe('StateApproveValueObject', () => {
  describe('constructor', () => {
    test('debe crear una instancia de StateApproveValueObject con un valor de true', () => {
      // Arrange
      const expectedValue = true;

      // Act
      const stateValueObject = new StateApproveObjectValue(expectedValue);
      const result = stateValueObject.valueOf();

      // Assert
      expect(result).toBe(expectedValue);
    });
  });
});
