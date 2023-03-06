import { StateValueobjectBase } from 'src/shared/domain/value-objects/state.value-objects';

/**
 *  
 *
 * @export
 * @class StateDefinitionValueObject
 * @extends {StateValueobjectBase}
 */
  export class StateDefinitionValueObject extends StateValueobjectBase {
  constructor(value: boolean) {
    super(value);
  }
}
