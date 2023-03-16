import { StateValueobjectBase } from '../../../../../../../../shared/domain/value-objects/state.value-objects';

/**
 *Esta clase extiende de una clase base que Valida si es un valor de tipo boolean
 *
 * @export
 * @class StateApproveObjectValue
 * @extends {StateValueobjectBase} // extiende de StateValueobjectBase para que solo acepte valores boolean
 */
export class StateApproveObjectValue extends StateValueobjectBase {
  field(): string {
    return 'estado del proyecto';
  }
  constructor(value: boolean) {
    super(value);
  }
}

const definition = new StateApproveObjectValue(false);
console.log(definition);
