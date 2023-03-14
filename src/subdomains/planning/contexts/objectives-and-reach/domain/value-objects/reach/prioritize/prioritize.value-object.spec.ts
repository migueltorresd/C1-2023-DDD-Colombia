import { PrioritizeValueObject } from './prioritize.value-object';

describe('PrioritizeValueObject', () => {
  let objectValue: PrioritizeValueObject;
  beforeEach(() => {
    // Arrange y Act
    objectValue = new PrioritizeValueObject('prioritize');
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
      const nameObjectValue = new PrioritizeValueObject(value);
      const result = nameObjectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    test('debe ser valido si el valor es un string no vacio', () => {
      // Arrange
      const value = 'prioritize';
      const nameObjectValue = new PrioritizeValueObject(value);
      // Act
      const hasErrors = nameObjectValue.hasErrors();
      const valueOf = nameObjectValue.valueOf();
      // Assert
      expect(hasErrors).toBe(false);
      expect(valueOf).toEqual(value);
    });
    test('debe devolver el valor correcto utilizando valueOf()', () => {
      // Arrange
      const value = 'prioritize';
      const nameObjectValue = new PrioritizeValueObject(value);
      // Act
      const valueOf = nameObjectValue.valueOf();
      // Assert
      expect(valueOf).toEqual(value);
    });
    test('debe dar error si el valor es menor que 3 caracteres', () => {
      // Arrange
      const value = 'pr';
      const descriptionObjectValue = new PrioritizeValueObject(value);
      const expected = true;
      // Act
      const result = descriptionObjectValue.hasErrors();
      // Assert
      expect(result).toBe(expected);
    });
    test('debe dar error si el valor es mayor que 200 caracteres', () => {
      // Arrange
      const value = 'pr'.repeat(201);
      const descriptionObjectValue = new PrioritizeValueObject(value);
      const expected = true;
      // Act
      const result = descriptionObjectValue.hasErrors();
      // Assert
      expect(result).toBe(expected);
    });
  });
});
