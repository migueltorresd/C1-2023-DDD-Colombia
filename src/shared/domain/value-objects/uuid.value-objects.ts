import { IsEmpty } from 'src/shared/validations/is-empty.validation';
import { IsUUID4 } from 'src/shared/validations/is-uuid-4.validation';
import { ValueObjectBase } from 'src/shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';

export abstract class UUIDValueObjectBase extends ValueObjectBase<string> {
  constructor(value: string) {
    super(value);
  }

  validateData(): void {
    this.isEmpty();
    this.isUUID();
  }

  private isUUID(): void {
    if (IsUUID4(this.value)) {
      this.setError({
        field: 'name',
        message: 'el Valor no es un UUID',
      } as IErrorValueObject);
    }
  }
  private isEmpty(): void {
    if (IsEmpty(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
