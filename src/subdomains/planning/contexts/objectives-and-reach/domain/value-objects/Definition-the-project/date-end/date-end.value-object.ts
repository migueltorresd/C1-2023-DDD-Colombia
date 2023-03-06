import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { DateAboveCurrentEnd } from 'src/shared/validations/is-date-end.validation';

export class DateEndObjectValue extends ValueObjectBase<Date> {
  validateData(): void {
    this.dateAboveCurrentEnd();
  }
  constructor(value?: Date) {
    super(value ? value : new Date());
  }

  private dateAboveCurrentEnd(): void {
    if (DateAboveCurrentEnd(this.value)) {
      this.setError({
        field: 'name',
        message: 'esta casilla no puede estar vacia',
      } as IErrorValueObject);
    }
  }
}
