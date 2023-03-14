import { UUIDValueObjectBase } from '../../../../../../../../shared/domain/value-objects/uuid.value-objects';

/**
 *Esta clase extiende de una clase base que Valida si es un valor de tipo UUID
 *
 * @export
 * @class ProjectIdValueObject
 * @extends {UUIDValueObjectBase} // extiende de UUIDValueObjectBase para que solo acepte valores UUID
 */
export class ProjectIdValueObject extends UUIDValueObjectBase {
  field(): string {
    return 'id del proyecto';
  }
  constructor(value: string) {
    super(value);
  }
}
