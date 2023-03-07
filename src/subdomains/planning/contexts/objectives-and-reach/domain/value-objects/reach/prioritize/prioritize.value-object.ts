import { StringValueobjectBase } from 'src/shared/domain/value-objects/string.value-objects';

/**
 * Esta clase extiende de una clase base que Valida si es un valor de tipo string
 *
 * @export
 * @class PrioritizeValueObject
 * @extends {StringValueobjectBase}
 */
export class PrioritizeValueObject extends StringValueobjectBase {
  constructor(value: string) {
    super(value);
  }
}
