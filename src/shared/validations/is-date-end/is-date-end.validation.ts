/**
 *este metodo valida la fecha mayor a un dia
 *
 * @param {Date} value // fecha a validar
 * @return {boolean} // retorna true si es mayor a la fecha actual
 */
export const DateAboveCurrentEnd = (value: Date): boolean => {
  const currentDate = new Date(Date.now());
  currentDate.setDate(currentDate.getDate() + 1); // Suma un día a la fecha actual
  if (currentDate <= value) {
    return true;
  }
  return false;
};
