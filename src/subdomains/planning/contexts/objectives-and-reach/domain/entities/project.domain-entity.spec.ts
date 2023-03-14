import { IProjectDomainInterface } from './interfaces/project.domain-entity.interface';
import { ProjectDomainEntity } from './project.domain-entity';

describe('ProjectDomainEntity', () => {
  let entity: ProjectDomainEntity;
  const data: IProjectDomainInterface = {
    projectId: '1',
    name: 'name',
    budget: 1000,
    StateApprove: true,
  };

  beforeEach(() => {
    entity = new ProjectDomainEntity(data);
  });

  describe('constructor', () => {
    test('debería crear una instancia de ProjectDomainEntity', () => {
      // Arrange

      // Act
      const instance = new ProjectDomainEntity();

      // Assert
      expect(instance).toBeDefined();
    });

    test('debería asignar los valores de los parámetros proporcionados', () => {
      // Arrange
      const expected = data;

      // Act
      const instance = new ProjectDomainEntity(data);

      // Assert
      expect(instance).toMatchObject(expected);
    });
  });

  describe('properties', () => {
    test('id de proyecto debería ser una propiedad', () => {
      // Arrange
      const expected = data.projectId;

      // Act
      const result = entity.projectId;

      // Assert
      expect(result).toBe(expected);
    });

    test('nombre debería ser una propiedad', () => {
      // Arrange
      const expected = data.name;

      // Act
      const result = entity.name;

      // Assert
      expect(result).toBe(expected);
    });

    test('presupuesto debería ser una propiedad', () => {
      // Arrange
      const expected = data.budget;

      // Act
      const result = entity.budget;

      // Assert
      expect(result).toBe(expected);
    });

    test('estado aprobado debería ser una propiedad', () => {
      // Arrange
      const expected = data.StateApprove;

      // Act
      const result = entity.StateApprove;

      // Assert
      expect(result).toBe(expected);
    });
  });
});
