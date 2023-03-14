import { IsEmpty } from '@validations';
import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { IsUUID4 } from '@validations';

/**
 * Clase base para los value objects de tipo uuid
 *
 * @export
 * @abstract
 * @class UUIDValueObjectBase
 * @extends {ValueObjectBase<string>} // extiende de ValueObjectBase<string> para que solo acepte valores string
 */
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
