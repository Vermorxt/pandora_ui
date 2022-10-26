import { AnyType } from '../../_types/AnyType'

export const sortArrayByKey = (arr: AnyType[], key: string | number) => {
  if (!Array.isArray(arr)) {
    return 0
  }

  arr.sort((a, b) => {
    const keyA = a?.[key] as string
    const keyB = b?.[key] as string

    if (+keyA < +keyB) return -1
    if (+keyA > +keyB) return 1

    return 0
  })

  return arr
}
