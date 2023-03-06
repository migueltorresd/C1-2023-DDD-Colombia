import { IsEmpty } from 'src/shared/validations/is-empty.validation';
import { StringMaxLength } from 'src/shared/validations/string-max-length.validation';
import { StringMinLength } from 'src/shared/validations/string-min-length.validation';
import { ValueObjectBase } from '../bases';
import { IErrorValueObject } from '../interface';

export abstract class StringValueobjectBase extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
  }
  validateData(): void {
    this.isEmpty();
    this.isStrignMin();
    this.isStringMax();
  }
  private isEmpty(): void {
    if (IsEmpty(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }

  private isStrignMin(): void {
    if (StringMinLength(this.value, 3)) {
      this.setError({
        field: 'name',
        message: 'el tamaño minimo es de 3 caracteres',
      } as IErrorValueObject);
    }
  }

  private isStringMax(): void {
    if (StringMaxLength(this.value, 100)) {
      this.setError({
        field: 'name',
        message: 'el tamaño maximo es de 40 caracteres',
      } as IErrorValueObject);
    }
  }
}
