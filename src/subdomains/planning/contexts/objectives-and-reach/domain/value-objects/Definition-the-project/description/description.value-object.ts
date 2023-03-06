import { StringValueobjectBase } from 'src/shared/domain/value-objects/string.value-objects';

export class DescriptionObjectValue extends StringValueobjectBase {
  constructor(value: string) {
    super(value);
  }
}
