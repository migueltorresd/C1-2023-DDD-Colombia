import { UUIDValueObjectBase } from 'src/shared/domain/value-objects/uuid.value-objects';

/**
 *Esta clase extiende de una clase base que Valida si es un valor de tipo UUID
 *
 * @export
 * @class DefinitionProjectIdValueObject
 * @extends {UUIDValueObjectBase}
 */
export class DefinitionProjectIdValueObject extends UUIDValueObjectBase {
  constructor(value: string) {
    super(value);
  }
}
