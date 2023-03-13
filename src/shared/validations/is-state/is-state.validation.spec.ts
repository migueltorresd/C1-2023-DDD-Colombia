import { IsState } from './is-state.validation';

describe('IsState', () => {
  test('debería devolver falso si el valor es un string', () => {
    // Arrange
    const validState = 'ACTIVO';
    const expected = false;

    // Act
    const result = IsState(validState);

    // Assert
    expect(result).toBe(expected);
  });

  test('debería devolver falso si el valor no es un estado válido', () => {
    // Arrange
    const validState = true;
    const expected = true;

    // Act
    const result = IsState(validState);

    // Assert
    expect(result).toBe(expected);
  });

  test('debería devolver falso si el valor no es un estado válido', () => {
    // Arrange
    const validState = 5;
    const expected = false;

    // Act
    const result = IsState(validState);

    // Assert
    expect(result).toBe(expected);
  });
});
