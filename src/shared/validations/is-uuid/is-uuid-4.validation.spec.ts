import { IsUUID4 } from './is-uuid-4.validation';

describe('IsUUID4', () => {
  test('debería devolver verdadero si el valor si es un uuid v4 válido', () => {
    // Arrange
    const validUUID4 = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
    const expected = true;

    // Act
    const result = IsUUID4(validUUID4);

    // Assert
    expect(result).toBe(expected);
  });

  test('debería devolver falso si el valor no es un uuid v4 válido', () => {
    // Arrange
    const validUUID4 = '444ec428-c152-11ed-afa1-0242ac120002';
    const expected = false;

    // Act
    const result = IsUUID4(validUUID4);

    // Assert
    expect(result).toBe(expected);
  });
});
