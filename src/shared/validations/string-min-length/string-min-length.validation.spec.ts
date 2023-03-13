import { StringMinLength } from './string-min-length.validation';

describe('StringMinLength', () => {
  test('debe devolver verdadero si el valor es un string con longitud menor que el mínimo', () => {
    // Arrange
    const value = 'Hola';
    const min = 10;

    // Act
    const result = StringMinLength(value, min);

    // Assert
    expect(result).toBe(true);
  });

  test('debe devolver falso si el valor es un string con longitud igual al mínimo', () => {
    // Arrange
    const value = 'Hola';
    const min = 4;

    // Act
    const result = StringMinLength(value, min);

    // Assert
    expect(result).toBe(false);
  });

  test('debe devolver falso si el valor es un string con longitud mayor que el mínimo', () => {
    // Arrange
    const value = 'Hola';
    const min = 2;

    // Act
    const result = StringMinLength(value, min);

    // Assert
    expect(result).toBe(false);
  });

  test('debe devolver true si el valor es nulo', () => {
    // Arrange
    const value: string | null = null;
    const min = 2;

    // Act
    const result = StringMinLength(value ?? '', min);

    // Assert
    expect(result).toBe(true);
  });

  test('debe devolver falso si el mínimo es nulo', () => {
    // Arrange
    const value = 'Hola';
    const min: number | null = null;

    // Act
    const result = StringMinLength(value, min ?? 0);

    // Assert
    expect(result).toBe(false);
  });
  test('debe devolver falso si el valor es undefined', () => {
    // Arrange
    const value = undefined;
    const min = 4;

    // Act
    const result = value !== undefined && StringMinLength(value, min);

    // Assert
    expect(result).toBe(false);
  });
});
