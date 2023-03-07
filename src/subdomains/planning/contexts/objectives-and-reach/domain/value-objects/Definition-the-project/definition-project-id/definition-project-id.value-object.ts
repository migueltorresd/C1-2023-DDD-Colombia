import { UUIDValueObjectBase } from 'src/shared/domain/value-objects/uuid.value-objects';

/**
 *Esta clase extiende de una clase base que Valida si es un valor de tipo UUID
 *
 * @export
 * @class DefinitionProjectIdValueObject
 * @extends {UUIDValueObjectBase}
 */
export class DefinitionProjectIdValueObject extends UUIDValueObjectBase {
  field(): string {
    return 'id del proyecto';
  }
  constructor(value: string) {
    super(value);
  }
}
const definitionId = new DefinitionProjectIdValueObject(
  '2f02db11-0e96-411a-9ba8-d32f77ce0636',
);
console.log(definitionId);
