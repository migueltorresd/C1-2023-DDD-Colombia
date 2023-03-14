import { DateAboveCurrent } from '@validations';
import { IErrorValueObject, ValueObjectBase } from '@sofka';

/**
 * Esta clase valida si es un valor de tipo Date y que sea mayor a la fecha actual
 *
 * @export
 * @class DateStartObjectValue // extiende de ValueObjectBase<Date> para que solo acepte valores Date
 * @extends {ValueObjectBase<Date>} // extiende de ValueObjectBase<Date> para que solo acepte valores Date
 */
export class DateStartObjectValue extends ValueObjectBase<Date> {
  validateData(): void {
    this.dateAboveCurrent();
  }
  constructor(value?: Date) {
    super(value ? value : new Date());
  }

  /**
   * Este metodo valida si es un valor Date y que sea mayor a la fecha actual
   *
   * @private
   * @memberof DateStartObjectValue // extiende de ValueObjectBase<Date> para que solo acepte valores Date
   */
  private dateAboveCurrent(): void {
    if (DateAboveCurrent(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
