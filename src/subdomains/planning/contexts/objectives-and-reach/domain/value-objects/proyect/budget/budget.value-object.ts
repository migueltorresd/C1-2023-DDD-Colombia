import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { isPositiveNumber } from '@validations';

/**
 * Esta clase valida si es un valor de tipo number y si es positivo
 *
 * @export
 * @class BudgetObjectValue
 * @extends {ValueObjectBase<number>} // extiende de ValueObjectBase<number> para que solo acepte valores number
 */
export class BudgetObjectValue extends ValueObjectBase<number> {
  validateData(): void {
    this.isPositiveNumber();
  }
  constructor(value?: number) {
    super(value || 0);
  }

  /**
   * Este metodo valida si es un valor number y si es positivo
   *
   * @private
   * @memberof BudgetObjectValue // extiende de ValueObjectBase<number> para que solo acepte valores number
   */
  private isPositiveNumber(): void {
    if (isPositiveNumber(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
