import { Helper } from '../cms-utils'

export const convertByte = (byte: number, unit: 'MB' | 'GB') => {
  if (!byte || !Helper.isNumeric(byte)) return

  let result = byte

  switch (unit) {
    case 'MB':
      result = byte / 1024 / 1024
      break
    case 'GB':
      result = byte / 1024 / 1024 / 1024
      break
  }

  return result.toFixed(2)
}
