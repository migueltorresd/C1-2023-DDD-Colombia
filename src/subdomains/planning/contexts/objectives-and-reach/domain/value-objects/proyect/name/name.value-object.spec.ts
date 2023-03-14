import { NameObjectValue } from './name.value-object';

describe('nameValueObject', () => {
  let objectValue: NameObjectValue;
  beforeEach(() => {
    // Arrange y Act
    objectValue = new NameObjectValue('name');
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
      const nameObjectValue = new NameObjectValue(value);
      const result = nameObjectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    test('debe ser valido si el valor es un string no vacio', () => {
      // Arrange
      const value = 'name';
      const nameObjectValue = new NameObjectValue(value);
      // Act
      const hasErrors = nameObjectValue.hasErrors();
      const valueOf = nameObjectValue.valueOf();
      // Assert
      expect(hasErrors).toBe(false);
      expect(valueOf).toEqual(value);
    });
    test('debe devolver el valor correcto utilizando valueOf()', () => {
      // Arrange
      const value = 'name';
      const nameObjectValue = new NameObjectValue(value);
      // Act
      const valueOf = nameObjectValue.valueOf();
      // Assert
      expect(valueOf).toEqual(value);
    });
    test('debe devolver el nombre correcto del campo', () => {
      // Arrange y Act
      // ya se ha hecho en el beforeEach

      // Assert
      const expected = 'name';
      const result = objectValue.field();
      expect(result).toEqual(expected);
    });
    test('debe dar error si el valor es menor que 3 caracteres', () => {
      // Arrange
      const value = 'de';
      const descriptionObjectValue = new NameObjectValue(value);
      const expected = true;

      // Act
      const result = descriptionObjectValue.hasErrors();

      // Assert
      expect(result).toBe(expected);
    });

    test('debe dar error si el valor es mayor que 30 caracteres', () => {
      // Arrange
      const value = 'd'.repeat(30);
      const descriptionObjectValue = new NameObjectValue(value);
      const expected = true;

      // Act
      const result = descriptionObjectValue.hasErrors();

      // Assert
      expect(result).toBe(expected);
    });

    test('debe ser valido si el valor tiene 3 o más caracteres y menos de 256', () => {
      // Arrange
      const value = 'description';
      const descriptionObjectValue = new NameObjectValue(value);
      const expected = false;

      // Act
      const result = descriptionObjectValue.hasErrors();

      // Assert
      expect(result).toBe(expected);
    });
  });
});
