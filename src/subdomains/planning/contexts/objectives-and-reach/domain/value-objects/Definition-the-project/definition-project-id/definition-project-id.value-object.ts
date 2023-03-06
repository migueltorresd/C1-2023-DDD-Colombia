import { UUIDValueObjectBase } from 'src/shared/domain/value-objects/uuid.value-objects';

export class DefinitionProjectIdValueObject extends UUIDValueObjectBase {
  constructor(value: string) {
    super(value);
  }
}
