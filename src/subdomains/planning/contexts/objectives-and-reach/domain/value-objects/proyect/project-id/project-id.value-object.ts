import { UUIDValueObjectBase } from 'src/shared/sofka/value-objects/uuid.value-objects';

export class ProjectIdValueObject extends UUIDValueObjectBase {
  constructor(value: string) {
    super(value);
  }
}
