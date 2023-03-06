import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { DateAboveCurrent } from 'src/shared/validations/is-date.validation';

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
