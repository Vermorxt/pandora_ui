export const isBoolean = (value: string | boolean | number) => {
  if (value === 'true' || value === 'false' || value === true || value === false) {
    return true
  }

  return false
}
