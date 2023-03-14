import { DateEndObjectValue } from './date-end.value-object';

describe('DateStartObjectValue', () => {
  describe('validaciones', () => {
    it('si le paso una fecha valida no me da error', () => {
      //Arrange
      const date = new Date(Date.now() + 24 * 60 * 60 * 1000); //fecha dentro de 24 horas
      const expected = false;
      //Act
      const objectValue = new DateEndObjectValue(date);
      const result = objectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    it('si le paso una fecha no valida me da error', () => {
      //Arrange
      const date = new Date(Date.now() - 24 * 60 * 60 * 1000); //fecha hace 24 horas
      const expected = false;
      //Act
      const objectValue = new DateEndObjectValue(date);
      const result = objectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    it('debe crear un objeto con fecha actual si no se proporciona una fecha', () => {
      //Arrange
      const expected = false;
      //Act
      const objectValue = new DateEndObjectValue();
      const result = objectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    it('debe generar un error si la fecha es mayor a la fecha actual', () => {
      // Arrange
      const invalidDate = new Date();
      invalidDate.setDate(invalidDate.getDate() + 1);
      const valueObject = new DateEndObjectValue(invalidDate);

      // Act
      valueObject.validateData();
      const hasErrors = valueObject.hasErrors();

      // Assert
      expect(hasErrors).toBe(true);
    });
  });
});
