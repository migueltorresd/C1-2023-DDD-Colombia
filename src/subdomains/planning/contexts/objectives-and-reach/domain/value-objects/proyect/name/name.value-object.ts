import { StringValueobjectBase } from 'src/shared/domain/value-objects/string.value-objects';

export class NameObjectValue extends StringValueobjectBase {
  constructor(value: string) {
    super(value);
  }
}
