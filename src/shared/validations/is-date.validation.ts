/**
 *este metodo valida que sea mayor al fecha actual
 *
 * @param {Date} value
 * @return {*}  {boolean}
 */
export const DateAboveCurrent = (value: Date): boolean => {
  if (new Date(Date.now()) <= value) {
    return true;
  }
  return false;
};
