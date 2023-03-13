import { DateAboveCurrentEnd } from './is-date-end.validation';

describe('DateAboveCurrentEnd', () => {
  describe('cuando la fecha dada es mayor que la fecha actual más un día', () => {
    test('debería volver true', () => {
      // Arrange
      const currentDate = new Date(Date.now());
      const futureDate = new Date(
        currentDate.setDate(currentDate.getDate() + 2),
      );
      const expected = true;

      // Act
      const result = DateAboveCurrentEnd(futureDate);

      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('cuando la fecha dada es menor o igual a la fecha actual más un día', () => {
    test('debería volver false', () => {
      // Arrange
      const currentDate = new Date(Date.now());
      const pastDate = new Date(currentDate.setDate(currentDate.getDate() - 2));
      const expected = false;
      // Act
      const result1 = DateAboveCurrentEnd(currentDate);
      const result2 = DateAboveCurrentEnd(pastDate);

      // Assert
      expect(result1).toBe(expected);
      expect(result2).toBe(expected);
    });
  });
});
