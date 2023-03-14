/**
 * Este metodo valida si es un valor string con longitud mayor o igual a un valor minimo
 *
 * @param {string} value // valor a validar
 * @param {number} min // valor minimo
 * @return {boolean} // retorna true si es mayor o igual
 */
export const StringMinLength = (value: string, min: number): boolean => {
  return value.length < min ? true : false;
};
