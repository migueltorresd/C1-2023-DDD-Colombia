export const IsState = (value: any): boolean => {
  if (typeof value === 'boolean') {
    return true;
  }
  return false;
};
