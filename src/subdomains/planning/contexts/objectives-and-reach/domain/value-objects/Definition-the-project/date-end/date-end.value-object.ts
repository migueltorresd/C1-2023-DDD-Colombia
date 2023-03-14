import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { DateAboveCurrentEnd } from '@validations';

/**
 *Esta clase valida si es un valor de tipo Date y que sea mayor a la fecha actual
 *
 * @export
 * @class DateEndObjectValue
 * @extends {ValueObjectBase<Date>} // extiende de ValueObjectBase<Date> para que solo acepte valores Date
 */
export class DateEndObjectValue extends ValueObjectBase<Date> {
  validateData(): void {
    this.dateAboveCurrentEnd();
  }
  constructor(value?: Date) {
    super(value ? value : new Date());
  }

  /**
   * Este metodo valida si es un valor Date y que sea mayor a la fecha actual
   *
   * @private
   * @memberof DateEndObjectValue // extiende de ValueObjectBase<Date> para que solo acepte valores Date
   */
  private dateAboveCurrentEnd(): void {
    if (DateAboveCurrentEnd(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
