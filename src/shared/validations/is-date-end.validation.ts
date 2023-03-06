/**
 *este metodo valida la fecha mayor a un dia
 *
 * @param {Date} value
 * @return {*}  {boolean}
 */
export const DateAboveCurrentEnd = (value: Date): boolean => {
  const currentDate = new Date(Date.now());
  currentDate.setDate(currentDate.getDate() + 1); // Suma un día a la fecha actual
  if (currentDate <= value) {
    return true;
  }
  return false;
};
