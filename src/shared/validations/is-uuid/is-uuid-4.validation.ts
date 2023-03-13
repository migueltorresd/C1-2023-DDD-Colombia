import { validate as uuidValidate, version as uuidVersion } from 'uuid';

/**
 * Este metodo valida si es un valor UUID4
 *
 * @param {string} value
 * @return {*}  {boolean}
 */
export const IsUUID4 = (value: string): boolean => {
  return uuidValidate(value) && uuidVersion(value) === 4;
};
