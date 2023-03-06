import { StringValueobjectBase } from 'src/shared/sofka/value-objects/string.value-objects';

export class Definition extends StringValueobjectBase {
  constructor(value: string) {
    super(value);
  }
}
