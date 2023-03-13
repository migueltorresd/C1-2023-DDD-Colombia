import { StringMaxLength } from './string-max-length.validation';

describe('StringMaxLength', () => {
  test('debería devolver verdadero si el valor es un string con longitud menor o igual a un valor máximo', () => {
    // Arrange
    const validString = 'Hola';
    const max = 10;
    const expected = false;

    // Act
    const result = StringMaxLength(validString, max);

    // Assert
    expect(result).toBe(expected);
  });

  test('debería devolver falso si el valor es un string con longitud mayor a un valor máximo', () => {
    // Arrange
    const validString = 'Hola';
    const max = 2;
    const expected = true;

    // Act
    const result = StringMaxLength(validString, max);

    // Assert
    expect(result).toBe(expected);
  });

  test('debería devolver verdadero si el valor es igual a la longitud mayor', () => {
    // Arrange
    const validString = '123';
    const max = 3;
    const expected = false;

    // Act
    const result = StringMaxLength(validString, max);

    // Assert
    expect(result).toBe(expected);
  });
});
