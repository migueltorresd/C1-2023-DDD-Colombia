import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { isPositiveNumber } from 'src/shared/validations/is-positive-number.validation';

/**
 * Esta clase valida si es un valor de tipo number y si es positivo
 *
 * @export
 * @class BudgetObjectValue
 * @extends {ValueObjectBase<number>}
 */
export class BudgetObjectValue extends ValueObjectBase<number> {
  validateData(): void {
    this.isPositiveNumber();
  }
  constructor(value?: number) {
    super(value ? value : 0);
  }

  private isPositiveNumber(): void {
    if (isPositiveNumber(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
