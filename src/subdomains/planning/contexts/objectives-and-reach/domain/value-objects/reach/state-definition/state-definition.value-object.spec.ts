import { StateDefinitionValueObject } from './state-definition.value-object';

describe('StateDefinitionValueObject', () => {
  describe('field', () => {
    test('debe retornar "estado de la definicion"', () => {
      // Arrange
      const stateValueObject = new StateDefinitionValueObject(true);
      const expectedField = 'estado de la definicion';

      // Act
      const result = stateValueObject.field();

      // Assert
      expect(result).toBe(expectedField);
    });
  });

  describe('constructor', () => {
    test('debe crear una instancia de StateDefinitionValueObject con un valor de true', () => {
      // Arrange
      const expectedValue = true;

      // Act
      const stateValueObject = new StateDefinitionValueObject(expectedValue);
      const result = stateValueObject.valueOf();

      // Assert
      expect(result).toBe(expectedValue);
    });
  });
});
