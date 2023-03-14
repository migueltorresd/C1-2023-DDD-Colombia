import { StateApproveObjectValue } from './state.value-object';

describe('StateValueObject', () => {
  describe('constructor', () => {
    test('debe crear una instancia de StateValueObject con un valor de true', () => {
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
