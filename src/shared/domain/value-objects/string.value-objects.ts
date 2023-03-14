import { IsEmpty } from '@validations';
import { IErrorValueObject, ValueObjectBase } from '@sofka';

import { StringMaxLength } from '@validations';
import { StringMinLength } from '@validations';

/**
 * Clase base para los value objects de tipo string
 *
 * @export
 * @abstract
 * @class StringValueobjectBase
 * @extends {ValueObjectBase<string>} // extiende de ValueObjectBase<string> para que solo acepte valores string
 */
export abstract class StringValueobjectBase extends ValueObjectBase<string> {
  abstract field(): string;
  constructor(value: string) {
    super(value);
  }
  /**
   * Este metodo valida si es un valor string
   *
   * @memberof StringValueobjectBase
   */
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
