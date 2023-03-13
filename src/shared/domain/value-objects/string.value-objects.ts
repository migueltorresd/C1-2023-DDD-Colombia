import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsEmpty } from 'src/shared/validations/is-empty.validation';
import { StringMaxLength } from 'src/shared/validations/string-max-length/string-max-length.validation';
import { StringMinLength } from 'src/shared/validations/string-min-length/string-min-length.validation';

export abstract class StringValueobjectBase extends ValueObjectBase<string> {
  abstract field(): string;
  constructor(value: string) {
    super(value);
  }
  validateData(): void {
    if (this.value) {
      this.isEmpty();
      this.isStringMax();
      this.isStrignMin();
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

  private isStrignMin(): void {
    if (StringMinLength(this.value, 3)) {
      this.setError({
        field: this.field(),
        message: `el tamaño ${this.field()} minimo es de 3 caracteres`,
      } as IErrorValueObject);
    }
  }

  private isStringMax(): void {
    if (StringMaxLength(this.value, 40)) {
      this.setError({
        field: this.field(),
        message: `el tamaño ${this.field()} maximo es de 40 caracteres`,
      } as IErrorValueObject);
    }
  }
}
