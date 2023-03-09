import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProjectDomainEntity } from '../../../entities/project.domain-entity';

/**
 * publicar el evento de estado aprobado editado
 *
 * @export
 * @abstract
 * @class StateApproveEditedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class StateApproveEditedEventPublisher<
  Response = ProjectDomainEntity,
> extends EventPublisherBase<Response> {
  publish<result = any>(): Promise<result> {
    return this.emit(
      'planning.StateApproveEditedEventPublisher',
      JSON.stringify(this.response),
    );
  }
}
