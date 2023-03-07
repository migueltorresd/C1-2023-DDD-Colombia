import { StringValueobjectBase } from 'src/shared/domain/value-objects/string.value-objects';

/**
 *Esta clase extiende de una clase base que Valida si es un valor de tipo string
 *
 * @export
 * @class DefinitionValueObject
 * @extends {StringValueobjectBase}
 */
export class DefinitionValueObject extends StringValueobjectBase {
  field() {
    return 'definicion';
  }
  constructor(value: string) {
    super(value);
  }
}

const definition = new DefinitionValueObject('hola');
console.log(definition);
