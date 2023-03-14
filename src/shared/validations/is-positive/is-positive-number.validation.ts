/**
 * Este metodo valida si es un valor positivo mayo que 0
 *
 * @param {number} value // valor a validar
 * @return {boolean} // retorna true si es positivo
 */
export const isPositiveNumber = (value: number): boolean => {
  if (value > 0) return true;
  return false;
};
