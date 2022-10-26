export const isNumeric = (num: string | number) => {
  const numValue = ('' + num.toString()) as unknown as string | number

  return !isNaN(numValue as number) && !isNaN(parseFloat(numValue as string))
}
