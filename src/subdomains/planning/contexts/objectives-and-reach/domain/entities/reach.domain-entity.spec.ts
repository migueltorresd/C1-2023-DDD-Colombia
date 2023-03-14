import { IReachDomainInterface } from './interfaces/reach.domain-entity.interface';
import { ReachDomainEntity } from './reach.domain-entity';

describe('ReachDomainEntity', () => {
  let entity: ReachDomainEntity;
  const data: IReachDomainInterface = {
    reachId: '1',
    definition: 'definition',
    prioritize: 'prioritize',
    stateDefinition: true,
  };

  beforeEach(() => {
    entity = new ReachDomainEntity(data);
  });

  describe('constructor', () => {
    test('debería crear una instancia de ReachDomainEntity', () => {
      // Arrange

      // Act
      const instance = new ReachDomainEntity();

      // Assert
      expect(instance).toBeDefined();
    });

    test('debería asignar los valores de los parámetros proporcionados', () => {
      // Arrange
      const expected = data;

      // Act
      const instance = new ReachDomainEntity(data);

      // Assert
      expect(instance).toMatchObject(expected);
    });
  });

  describe('properties', () => {
    test('id de alcance debería ser una propiedad', () => {
      // Arrange
      const expected = data.reachId;

      // Act
      const result = entity.reachId;

      // Assert
      expect(result).toBe(expected);
    });

    test('definición debería ser una propiedad', () => {
      // Arrange
      const expected = data.definition;

      // Act
      const result = entity.definition;

      // Assert
      expect(result).toBe(expected);
    });

    test('prioridad debería ser una propiedad', () => {
      // Arrange
      const expected = data.prioritize;

      // Act
      const result = entity.prioritize;

      // Assert
      expect(result).toBe(expected);
    });

    test('estado de definición debería ser una propiedad', () => {
      // Arrange
      const expected = data.stateDefinition;

      // Act
      const result = entity.stateDefinition;

      // Assert
      expect(result).toBe(expected);
    });
  });
});
