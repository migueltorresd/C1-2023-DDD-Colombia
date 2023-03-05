'use strict';
exports.__esModule = true;
exports.IsUUID4 = void 0;
var uuid_1 = require('uuid');
var IsUUID4 = function (value) {
  return (0, uuid_1.validate)(value) && (0, uuid_1.version)(value) === 4;
};
exports.IsUUID4 = IsUUID4;
// Caso de prueba 1: valor UUID válido
var validUUID = '77d0ccf1-1a8a-49f5-ae30-76a28c90f07b';
console.log(
  'Valid UUID '.concat(validUUID, ': ').concat((0, exports.IsUUID4)(validUUID)),
); // Debería imprimir "true"
// Caso de prueba 2: valor UUID con versión no válida
var invalidVersionUUID = 'c2f5b2c2-97d5-4c5e-8c02-9fcf4853a3bb';
console.log(
  'Invalid version UUID '
    .concat(invalidVersionUUID, ': ')
    .concat((0, exports.IsUUID4)(invalidVersionUUID)),
); // Debería imprimir "false"
// Caso de prueba 3: valor UUID con formato no válido
var invalidFormatUUID = 'invalid-uuid-format';
console.log(
  'Invalid format UUID '
    .concat(invalidFormatUUID, ': ')
    .concat((0, exports.IsUUID4)(invalidFormatUUID)),
); // Debería imprimir "false"
