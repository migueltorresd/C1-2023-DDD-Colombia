import { UUIDValueObjectBase } from 'src/shared/domain/value-objects/uuid.value-objects';

/**
 * Esta clase extiende de una clase base que Valida si es un valor de tipo UUID
 *
 * @export
 * @class ReachIdValueObject
 * @extends {UUIDValueObjectBase}
 */
export class ReachIdValueObject extends UUIDValueObjectBase {
  constructor(value: string) {
    super(value);
  }
}
