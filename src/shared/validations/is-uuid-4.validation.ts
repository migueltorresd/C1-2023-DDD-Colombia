import { validate as uuidValidate, version as uuidVersion } from 'uuid';
export const IsUUID4 = (value: string): boolean => {
  return uuidValidate(value) && uuidVersion(value) === 4;
};

// Caso de prueba 1: valor UUID válido
const validUUID = '77d0ccf1-1a8a-49f5-ae30-76a28c90f07b';
console.log(`Valid UUID ${validUUID}: ${IsUUID4(validUUID)}`); // Debería imprimir "true"

// Caso de prueba 2: valor UUID con versión no válida
const invalidVersionUUID = 'c2f5b2c2-97d5-4c5e-8c02-9fcf4853a3bb';
console.log(
  `Invalid version UUID ${invalidVersionUUID}: ${IsUUID4(invalidVersionUUID)}`,
); // Debería imprimir "false"

// Caso de prueba 3: valor UUID con formato no válido
const invalidFormatUUID = 'invalid-uuid-format';
console.log(
  `Invalid format UUID ${invalidFormatUUID}: ${IsUUID4(invalidFormatUUID)}`,
); // Debería imprimir "false"
