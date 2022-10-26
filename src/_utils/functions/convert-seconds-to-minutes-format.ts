import { Helper } from '../cms-utils'

export const convertSecondsToMinutesFormat = (seconds: number) => {
  if (!Helper.isNumeric(seconds)) return

  return new Date(+seconds * 1000).toISOString().substr(14, 5)
}
