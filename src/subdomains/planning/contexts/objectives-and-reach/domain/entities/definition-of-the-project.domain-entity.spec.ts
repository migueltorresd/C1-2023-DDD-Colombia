import { DefinitionOfTheProjectDomainEntity } from './definition-of-the-project.domain-entity';
import { IDefinitionOfTheProjectDomainInterface } from './interfaces/definition-of-the-project.domain-entity.interface';

describe('DefinitionOfTheProjectDomainEntity', () => {
  let entity: DefinitionOfTheProjectDomainEntity;
  const data: IDefinitionOfTheProjectDomainInterface = {
    definitionId: '1',
    description: 'Project definition',
    stateApprove: true,
    dateEnd: new Date('2023-12-31'),
    dateStart: new Date('2023-01-01'),
  };

  beforeEach(() => {
    entity = new DefinitionOfTheProjectDomainEntity(data);
  });

  describe('constructor', () => {
    test('debería crear una instancia de DefinitionOfTheProjectDomainEntity', () => {
      // Arrange

      // Act
      const instance = new DefinitionOfTheProjectDomainEntity();

      // Assert
      expect(instance).toBeDefined();
    });

    test('debería asignar los valores de los parámetros proporcionados', () => {
      // Arrange
      const expected = data;

      // Act
      const instance = new DefinitionOfTheProjectDomainEntity(data);

      // Assert
      expect(instance).toMatchObject(expected);
    });
  });

  describe('properties', () => {
    test('definición de proyecto debería ser una propiedad', () => {
      // Arrange
      const expected = data.definitionId;

      // Act
      const result = entity.definitionId;

      // Assert
      expect(result).toBe(expected);
    });

    test('descripción debería ser una propiedad', () => {
      // Arrange
      const expected = data.description;

      // Act
      const result = entity.description;

      // Assert
      expect(result).toBe(expected);
    });

    test('estado aprobado debería ser una propiedad', () => {
      // Arrange
      const expected = data.stateApprove;

      // Act
      const result = entity.stateApprove;

      // Assert
      expect(result).toBe(expected);
    });

    test('fecha final debería ser una propiedad', () => {
      // Arrange
      const expected = data.dateEnd;

      // Act
      const result = entity.dateEnd;

      // Assert
      expect(result).toBe(expected);
    });
  });
  describe('DefinitionOfTheProjectDomainEntity constructor', () => {
    test('debe asignar los valores proporcionados en el parámetro data', () => {
      // Arrange
      const data: IDefinitionOfTheProjectDomainInterface = {
        definitionId: '123',
        description: 'Descripción del proyecto',
        stateApprove: true,
        dateEnd: new Date(),
        dateStart: new Date(),
      };

      // Act
      const entity = new DefinitionOfTheProjectDomainEntity(data);

      // Assert
      expect(entity.definitionId).toBe(data.definitionId);
      expect(entity.description).toBe(data.description);
      expect(entity.stateApprove).toBe(data.stateApprove);
      expect(entity.dateEnd).toBe(data.dateEnd);
      expect(entity.dateStart).toBe(data.dateStart);
    });

    test('no debe asignar valores si el parámetro data no se proporciona', () => {
      // Act
      const entity = new DefinitionOfTheProjectDomainEntity();

      // Assert
      expect(entity.definitionId).toBeUndefined();
      expect(entity.description).toBeUndefined();
      expect(entity.stateApprove).toBeUndefined();
      expect(entity.dateEnd).toBeUndefined();
      expect(entity.dateStart).toBeUndefined();
    });
  });
});
