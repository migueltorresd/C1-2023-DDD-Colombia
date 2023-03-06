import { StateValueobjectBase } from 'src/shared/sofka/value-objects/state.value-objects';

export class StateDefinition extends StateValueobjectBase {
  constructor(value: boolean) {
    super(value);
  }
}
