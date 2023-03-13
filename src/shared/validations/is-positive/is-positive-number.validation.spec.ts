import { isPositiveNumber } from './is-positive-number.validation';

describe('IsPositiveNumber', () => {
  test('debería devolver verdadero si el valor es un número positivo', () => {
    // Arrange
    const validPositiveNumber = 5;
    const expected = true;

    // Act
    const result = isPositiveNumber(validPositiveNumber);

    // Assert
    expect(result).toBe(expected);
  });

  test('debería devolver falso si el valor no es un número positivo', () => {
    // Arrange
    const validPositiveNumber = -5;
    const expected = false;

    // Act
    const result = isPositiveNumber(validPositiveNumber);

    // Assert
    expect(result).toBe(expected);
  });
});
