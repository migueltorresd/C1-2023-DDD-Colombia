/**
 * Este metodo valida si es un valor string con longitud menor o igual a un valor maximo
 *
 * @param {string} value
 * @param {number} max
 * @return {*}  {boolean}
 */
export const StringMaxLength = (value: string, max: number): boolean => {
  return value.length > max ? true : false;
};
