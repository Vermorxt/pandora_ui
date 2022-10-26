import { AnyType } from '../../_types/AnyType'

export const getObjectKeyAsString = (obj: AnyType, keySearchFor: string) => {
  let keyString = ''

  Object.keys(obj).forEach(key => {
    if (keySearchFor === obj[key]) {
      keyString = key.toString()
    }
  })

  return keyString
}
