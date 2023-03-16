import { IsEmpty, IsState } from '@validations';
import { IErrorValueObject, ValueObjectBase } from '@sofka';

/**
 * Clase base para los value objects de tipo estado
 *
 * @export
 * @abstract
 * @class StateValueobjectBase
 * @extends {ValueObjectBase<boolean>} // extiende de ValueObjectBase<boolean> para que solo acepte valores booleanos
 */
export abstract class StateValueobjectBase extends ValueObjectBase<boolean> {
  abstract field(): string;
  constructor(value: boolean) {
    super(value);
  }

  /**
   * Este metodo valida si es un valor booleano
   *
   * @memberof StateValueobjectBase
   */
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
    if (!IsState(this.value)) {
      this.setError({
        field: this.field(),
        message: `el estado ${this.field()} no es valido`,
      } as IErrorValueObject);
    }
  }
}
