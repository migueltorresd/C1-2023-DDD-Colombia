import { BudgetObjectValue } from './budget.value-object';

describe('presupuesto value object', () => {
  let objectValue: BudgetObjectValue;
  beforeEach(() => {
    //Arrange and Act
    objectValue = new BudgetObjectValue(1000);
  });
  it('puede ser creado', () => {
    //Assert
    expect(objectValue).toBeDefined();
  });

  describe('validaciones', () => {
    it('si le paso un presupuesto valido no me da error', () => {
      //Arrange
      const price = 1000;
      const expected = true;
      //Act
      const objectValue = new BudgetObjectValue(price);
      const result = objectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    it('si le paso un presupuesto no valido me da error', () => {
      //Arrange
      const price = -1000;
      const expected = false;
      //Act
      const objectValue = new BudgetObjectValue(price);
      const result = objectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
    it('si el valor viene vacio no error', () => {
      //Arrange
      const price = undefined;
      const expected = false;
      //Act
      const objectValue = new BudgetObjectValue(price);
      const result = objectValue.hasErrors();
      //Assert
      expect(result).toBe(expected);
    });
  });
});
