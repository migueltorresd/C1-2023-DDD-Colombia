/**
 *este metodo valida que sea mayor al fecha actual
 *
 * @param {Date} value // fecha a validar
 * @return {boolean} // retorna true si es mayor a la fecha actual
 */
export const DateAboveCurrent = (value: Date): boolean => {
  if (new Date(Date.now()) <= value) {
    return true;
  }
  return false;
};
