import { UUIDValueObjectBase } from 'src/shared/domain/value-objects/uuid.value-objects';

export class DefinitionIdValueObject extends UUIDValueObjectBase {
  constructor(value: string) {
    super(value);
  }
}
