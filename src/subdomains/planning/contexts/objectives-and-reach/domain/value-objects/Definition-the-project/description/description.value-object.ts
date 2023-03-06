import { StringValueobjectBase } from 'src/shared/sofka/value-objects/string.value-objects';

export class Description extends StringValueobjectBase {
  constructor(value: string) {
    super(value);
  }
}
