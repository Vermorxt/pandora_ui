import { AnyType } from '../../_types/AnyType'

export const hasValue = (value: AnyType) => typeof value !== 'undefined' && value !== null
