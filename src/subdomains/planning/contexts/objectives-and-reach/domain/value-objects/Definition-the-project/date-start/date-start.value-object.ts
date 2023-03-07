import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { DateAboveCurrent } from 'src/shared/validations/is-date.validation';

/**
 * Esta clase valida si es un valor de tipo Date y que sea mayor a la fecha actual
 *
 * @export
 * @class DateStartObjectValue
 * @extends {ValueObjectBase<Date>}
 */
export class DateStartObjectValue extends ValueObjectBase<Date> {
  validateData(): void {
    this.dateAboveCurrent();
  }
  constructor(value?: Date) {
    super(value ? value : new Date());
  }

  private dateAboveCurrent(): void {
    if (DateAboveCurrent(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
