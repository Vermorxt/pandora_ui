export const addThousandSeparator = (value: number) => {
  if (isNaN(value)) {
    return 0
  }

  return new Intl.NumberFormat().format(value)
}
