/**
 * Este metodo valida si es un valor booleano
 *
 * @param {*} value
 * @return {*}  {boolean}
 */
export const IsState = (value: any): boolean => {
  if (typeof value === 'boolean') {
    return true;
  }
  return false;
};
