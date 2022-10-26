import { AnyType } from '../../_types/AnyType'

export const cloneNestedObject = (nestedObject: AnyType = {}) =>
  JSON.parse(JSON.stringify(nestedObject)) as unknown as AnyType
