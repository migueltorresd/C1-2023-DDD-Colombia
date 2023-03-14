/**
 * Este metodo valida si es un valor string con longitud menor o igual a un valor maximo
 *
 * @param {string} value // valor a validar
 * @param {number} max // valor maximo
 * @return {boolean} // retorna true si es menor o igual
 */
export const StringMaxLength = (value: string, max: number): boolean => {
  return value.length > max ? true : false;
};
