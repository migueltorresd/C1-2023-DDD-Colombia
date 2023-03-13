import { DateAboveCurrent } from './is-date.validation';

describe('DateAboveCurrent', () => {
  describe('cuando la fecha dada es mayor o igual a la fecha actual', () => {
    it('debe devolver true', () => {
      // Arrange
      const currentDate = new Date(Date.now());
      const futureDate = new Date(
        currentDate.setDate(currentDate.getDate() + 1),
      );

      // Act
      const result1 = DateAboveCurrent(currentDate);
      const result2 = DateAboveCurrent(futureDate);

      // Assert
      expect(result1).toBe(true);
      expect(result2).toBe(true);
    });
  });

  describe('cuando la fecha dada es menor que la fecha actual', () => {
    it('debe devolver false', () => {
      // Arrange
      const currentDate = new Date(Date.now());
      const pastDate = new Date(currentDate.setDate(currentDate.getDate() - 1));

      // Act
      const result = DateAboveCurrent(pastDate);

      // Assert
      expect(result).toBe(false);
    });
  });
});
