import { AnyType } from '../../_types/AnyType'

export const checkForExistingValuesInNestedArrays = (
  array1: { [key: string]: AnyType }[][],
  array2: { [key: string]: AnyType }[][],
  key: string
): boolean => {
  let found = false

  array1.forEach(arr1 => {
    array2.forEach(arr2 => {
      if (arr1?.[0]?.[key] === arr2?.[0]?.[key]) found = true
    })
  })

  return found
}
