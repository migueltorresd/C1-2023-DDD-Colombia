import { StateValueobjectBase } from 'src/shared/domain/value-objects/state.value-objects';

/**
 *  Esta clase extiende de una clase base que Valida si es un valor booleano
 *
 * @export
 * @class StateDefinitionValueObject
 * @extends {StateValueobjectBase}
 */
export class StateDefinitionValueObject extends StateValueobjectBase {
  field(): string {
    return 'estado de la definicion';
  }
  constructor(value: boolean) {
    super(value);
  }
}
