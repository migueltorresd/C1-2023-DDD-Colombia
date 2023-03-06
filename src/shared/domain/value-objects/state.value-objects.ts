import { IsEmpty } from 'src/shared/validations/is-empty.validation';
import { IsState } from 'src/shared/validations/is-state.validation';
import { ValueObjectBase } from 'src/shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';

export abstract class StateValueobjectBase extends ValueObjectBase<boolean> {
  constructor(value: boolean) {
    super(value);
  }

  validateData(): void {
    this.isEmpty();
    this.isState();
  }

  private isEmpty(): void {
    if (IsEmpty(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }

  private isState(): void {
    if (IsState(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
