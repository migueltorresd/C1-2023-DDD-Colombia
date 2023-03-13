/**
 * Este metodo valida si es un valor string con longitud mayor o igual a un valor minimo
 *
 * @param {string} value
 * @param {number} min
 * @return {boolean}
 */
export const StringMinLength = (value: string, min: number): boolean => {
  return value.length < min ? true : false;
};
