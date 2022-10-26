export const findDuplicatesInArrays = (arr1: string[], arr2: string[]) => {
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null
  }

  return arr1.filter(arrValue => arr2.includes(arrValue))
}
