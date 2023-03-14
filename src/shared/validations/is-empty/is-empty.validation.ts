/**
 * este metodo valida de que no llegue vacio
 *
 * @param {(boolean | string | number | bigint | [] | object | null | undefined)} value // valor a validar
 * @return {boolean} // retorna true si es vacio
 */
export const IsEmpty = (
  value: boolean | string | number | bigint | [] | object | null | undefined,
): boolean => {
  if (typeof value === 'string') return value.trim() === '' ? true : false;
  else if (value === null || value === undefined) return true;
  else if (typeof value === 'object')
    return Object.keys(value).length === 0 ? true : false;
  return false;
};
