import { StateValueobjectBase } from 'src/shared/sofka/value-objects/state.value-objects';

export class State extends StateValueobjectBase {
  constructor(value: boolean) {
    super(value);
  }
}
