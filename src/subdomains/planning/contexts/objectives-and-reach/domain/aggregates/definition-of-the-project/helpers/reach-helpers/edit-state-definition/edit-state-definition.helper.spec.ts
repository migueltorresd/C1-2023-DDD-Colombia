import { EditStateDefinitionHelper } from '../../..';
import { ReachDomainEntity } from '../../../../../entities/reach.domain-entity';
import { EditedStateDefinitionEventPublisher } from '../../../../../events/publishers/reach/edited-state-definition.event-publisher';
import { IReachDomainService } from '../../../../../services/reach.domain-service';

interface IReachDomainServiceMock extends IReachDomainService {
  createReach: jest.Mock;
  editDefinition: jest.Mock;
  editPrioritize: jest.Mock;
}

describe('EditStateDefinitionHelper', () => {
  test('debe retornar la respuesta del servicio', async () => {
    // Arrange
    const definitionId = '123';
    const stateDefinition = 'stateDef';
    const response: ReachDomainEntity = {
      id: '456',
      name: 'entity name',
    };
    const event: EditedStateDefinitionEventPublisher = {
      response,
      publish: jest.fn(),
    };
    const service: IReachDomainServiceMock = {
      editStateDefinition: jest.fn().mockResolvedValue(response),
      createReach: jest.fn(),
      editDefinition: jest.fn(),
      editPrioritize: jest.fn().mockResolvedValue({} as ReachDomainEntity),
    };

    // Act
    const result = await EditStateDefinitionHelper(
      definitionId,
      stateDefinition,
      event,
      service,
    );

    // Assert
    expect(result).toBe(response);
  });
});
