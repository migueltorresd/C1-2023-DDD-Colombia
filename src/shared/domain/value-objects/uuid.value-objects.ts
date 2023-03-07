import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsEmpty } from 'src/shared/validations/is-empty.validation';
import { IsUUID4 } from 'src/shared/validations/is-uuid-4.validation';

export abstract class UUIDValueObjectBase extends ValueObjectBase<string> {
  abstract field(): string;
  constructor(value: string) {
    super(value);
  }

  validateData(): void {
    if (this.value) {
      this.isEmpty();
      this.isUUID();
    }
  }

  private isUUID(): void {
    if (!IsUUID4(this.value)) {
      this.setError({
        field: this.field(),
        message: `el ${this.field()} no es valido`,
      } as IErrorValueObject);
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
}
