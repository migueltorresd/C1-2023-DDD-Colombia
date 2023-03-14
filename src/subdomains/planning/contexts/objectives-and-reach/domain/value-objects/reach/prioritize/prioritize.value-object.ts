import { StringValueobjectBase } from '../../../../../../../../shared/domain/value-objects/string.value-objects';

/**
 * Esta clase extiende de una clase base que Valida si es un valor de tipo string
 *
 * @export
 * @class PrioritizeValueObject
 * @extends {StringValueobjectBase} // extiende de StringValueobjectBase para que solo acepte valores string
 */
export class PrioritizeValueObject extends StringValueobjectBase {
  field() {
    return 'prioritize';
  }
  constructor(value: string) {
    super(value);
  }
}
