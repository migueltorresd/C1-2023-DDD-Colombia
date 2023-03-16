/**
 * Este metodo valida si es un valor booleano
 *
 * @param {boolean} value // valor a validar
 * @return {boolean} // retorna true si es booleano
 */
export const IsState = (value: any): boolean => {
  console.log(value);
  if (typeof value === 'boolean') {
    return true;
  }
  return false;
};
