import { ReachIdValueObject } from './reach-id.value-object';

describe('reachIdValueObject', () => {
  let objectValue: ReachIdValueObject;

  beforeEach(() => {
    // Arrange y Act
    objectValue = new ReachIdValueObject(
      '2f02db11-0e96-411a-9ba8-d32f77ce0636',
    );
  });

  test('should be defined', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });
});
describe('Validations', () => {
  test('if you do not pass a value empty to me create the uuid and do not give me error', () => {
    // Arrange
    const UUID = '';
    const expected = false;
    // Act
    const objectValue = new ReachIdValueObject(UUID);
    const result = objectValue.hasErrors();
    // Assert
    expect(result).toBe(expected);
  });
  test('if you pass an invalid uuid to me give error or an earlier version', () => {
    // Arrange
    const UUID = '32f6e43e-c1e4-11ed-afa1-0242ac120002';
    const expected = true;
    // Act
    const objectValue = new ReachIdValueObject(UUID);
    const result = objectValue.hasErrors();
    // Assert
    expect(result).toBe(expected);
  });
});
