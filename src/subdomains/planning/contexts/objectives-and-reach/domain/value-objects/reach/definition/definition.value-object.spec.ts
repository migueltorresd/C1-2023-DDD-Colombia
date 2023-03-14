import { DefinitionValueObject } from './definition.value-object';

describe('DefinitionObjectValue', () => {
  let objectValue: DefinitionValueObject;
  beforeEach(() => {
    // Arrange y Act
    objectValue = new DefinitionValueObject('definition');
  });
  test('debe estar definido', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });

  describe('Validaciones', () => {
    test('debe dar false si el valor es vacio', () => {
      //Arrange
      const value = '';
      const expected = false;
      //Act
      const nameObjectValue = new DefinitionValueObject(value);
      const result = nameObjectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    test('debe ser valido si el valor es un string no vacio', () => {
      // Arrange
      const value = 'definition';
      const nameObjectValue = new DefinitionValueObject(value);
      // Act
      const hasErrors = nameObjectValue.hasErrors();
      const valueOf = nameObjectValue.valueOf();
      // Assert
      expect(hasErrors).toBe(false);
      expect(valueOf).toEqual(value);
    });
    test('debe devolver el valor correcto utilizando valueOf()', () => {
      // Arrange
      const value = 'definition';
      const nameObjectValue = new DefinitionValueObject(value);
      // Act
      const valueOf = nameObjectValue.valueOf();
      // Assert
      expect(valueOf).toEqual(value);
    });
    test('debe dar error si el valor es menor que 3 caracteres', () => {
      // Arrange
      const value = 'de';
      const descriptionObjectValue = new DefinitionValueObject(value);
      const expected = true;

      // Act
      const result = descriptionObjectValue.hasErrors();

      // Assert
      expect(result).toBe(expected);
    });
    test('debe dar error si el valor es mayor que 500 caracteres', () => {
      // Arrange
      const value = 'de'.repeat(501);
      const descriptionObjectValue = new DefinitionValueObject(value);
      const expected = true;

      // Act
      const result = descriptionObjectValue.hasErrors();

      // Assert
      expect(result).toBe(expected);
    });
  });
});
