import { Helper } from '../cms-utils'

export const getSecureRandomNumber = (): number => Math.floor(100000 + Helper.secureRandomNumber() * 900000)
