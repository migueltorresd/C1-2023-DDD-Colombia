"use strict";
exports.__esModule = true;
exports.isDate = void 0;
var isDate = function (value) {
    if (isNaN(new Date(value).getTime())) {
        return false;
    }
    var date = new Date(value);
    return (date.toISOString().slice(0, 10) ===
        new Date(value).toISOString().slice(0, 10));
};
exports.isDate = isDate;
// Caso de prueba 1: fecha válida en formato ISO
var validDate = '2023-02-31';
console.log("Valid date ".concat(validDate, ": ").concat((0, exports.isDate)(validDate))); // Debería imprimir "true"
// Caso de prueba 2: fecha no válida en formato ISO
var invalidDate = '3 de febrero';
console.log("Invalid date ".concat(invalidDate, ": ").concat((0, exports.isDate)(invalidDate))); // Debería imprimir "false"
// Caso de prueba 3: fecha no válida en formato no ISO
var invalidFormatDate = '2 de febrero';
console.log("Invalid format date ".concat(invalidFormatDate, ": ").concat((0, exports.isDate)(invalidFormatDate))); // Debería imprimir "false"
