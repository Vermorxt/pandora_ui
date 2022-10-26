import { AnyType } from '../../_types/AnyType'

export const findLongestKey = (obj: string | AnyType[]) => {
  if (Array.isArray(obj) || typeof obj !== 'object' || Object.keys(obj).length === 0) {
    return null
  }

  return Object.keys(obj).reduce((all, current) => (all.length > current.length ? all : current))
}
