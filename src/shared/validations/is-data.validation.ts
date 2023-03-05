export const isDate = (value: any): boolean => {
  if (isNaN(new Date(value).getTime())) {
    return false;
  }

  const date = new Date(value);
  return (
    date.toISOString().slice(0, 10) ===
    new Date(value).toISOString().slice(0, 10)
  );
};

// Caso de prueba 1: fecha válida en formato ISO
const validDate = '2023-03-05';
console.log(`Valid date ${validDate}: ${isDate(validDate)}`); // Debería imprimir "true"

// Caso de prueba 2: fecha no válida en formato ISO
const invalidDate = '2023-02-31';
console.log(`Invalid date ${invalidDate}: ${isDate(invalidDate)}`); // Debería imprimir "false"

// Caso de prueba 3: fecha no válida en formato no ISO
const invalidFormatDate = '31/02/2023';
console.log(
  `Invalid format date ${invalidFormatDate}: ${isDate(invalidFormatDate)}`,
); // Debería imprimir "false"
