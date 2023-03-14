import { DefinitionProjectIdValueObject } from './definition-project-id.value-object';

describe('DefinitionProjectIdValueObject', () => {
  let objectValue: DefinitionProjectIdValueObject;

  beforeEach(() => {
    // Arrange y Act
    objectValue = new DefinitionProjectIdValueObject(
      '2f02db11-0e96-411a-9ba8-d32f77ce0636',
    );
  });

  test('debería estar definido', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });
});
describe('Validaciones', () => {
  test('si no le pasa un valor vacio me cre el uuid y no me da error', () => {
    // Arrange
    const UUID = '';
    const expected = false;
    // Act
    const objectValue = new DefinitionProjectIdValueObject(UUID);
    const result = objectValue.hasErrors();
    // Assert
    expect(result).toBe(expected);
  });
  test('si le paso un uuid no valido me da error o de una version anterior', () => {
    // Arrange
    const UUID = '32f6e43e-c1e4-11ed-afa1-0242ac120002';
    const expected = true;
    // Act
    const objectValue = new DefinitionProjectIdValueObject(UUID);
    const result = objectValue.hasErrors();
    // Assert
    expect(result).toBe(expected);
  });
});
