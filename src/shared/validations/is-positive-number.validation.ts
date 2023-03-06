/**
 * Este metodo valida si es un valor positivo mayo que 0
 *
 * @param {number} value
 * @return {*}  {boolean}
 */
export const isPositiveNumber = (value: number): boolean => {
  if (value > 0) return true;
  return false;
};
