import { AnyType } from '../../_types/AnyType'

export const sortArraysAndMap = (array: AnyType[], order: string[], key: string | number) => {
  if (!array || array.length <= 0 || !Array.isArray(array)) {
    console.log('sortArraysAndMap -> NO ARRAY ...: ', array)

    return []
  }

  array.sort((a, b) => {
    const keyA = a[key] as string
    const keyB = b[key] as string

    return order.indexOf(keyA) > order.indexOf(keyB) ? 1 : -1
  })

  return array
}
