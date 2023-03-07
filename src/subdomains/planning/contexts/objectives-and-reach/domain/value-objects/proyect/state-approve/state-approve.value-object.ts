import { StateValueobjectBase } from 'src/shared/domain/value-objects/state.value-objects';

/**
 *Esta clase extiende de una clase base que Valida si es un valor de tipo boolean
 *
 * @export
 * @class StateApproveObjectValue
 * @extends {StateValueobjectBase}
 */
export class StateApproveObjectValue extends StateValueobjectBase {
  field(): string {
    return 'estado de la aprobacion';
  }
  constructor(value: boolean) {
    super(value);
  }
}
