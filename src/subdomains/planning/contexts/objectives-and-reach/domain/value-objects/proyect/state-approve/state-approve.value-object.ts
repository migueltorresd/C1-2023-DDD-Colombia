import { StateValueobjectBase } from 'src/shared/domain/value-objects/state.value-objects';

export class StateApproveObjectValue extends StateValueobjectBase {
  constructor(value: boolean) {
    super(value);
  }
}
