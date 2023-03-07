import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsEmpty } from 'src/shared/validations/is-empty.validation';
import { IsState } from 'src/shared/validations/is-state.validation';

export abstract class StateValueobjectBase extends ValueObjectBase<boolean> {
  abstract field(): string;
  constructor(value: boolean) {
    super(value);
  }

  validateData(): void {
    if (this.value) {
      this.isEmpty();
      this.isState();
    }
  }
  private isEmpty(): void {
    if (IsEmpty(this.value)) {
      this.setError({
        field: this.field(),
        message: `esta casilla ${this.field()} no puede estar vacia`,
      } as IErrorValueObject);
    }
  }

  private isState(): void {
    if (IsState(this.value)) {
      this.setError({
        field: this.field(),
        message: `el estado ${this.field()} no es valido`,
      } as IErrorValueObject);
    }
  }
}
