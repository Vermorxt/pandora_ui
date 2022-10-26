import { AnyType } from '../../_types/AnyType'

export const isObject = (element: AnyType) => (typeof element === 'object' && !Array.isArray(element)) || null
