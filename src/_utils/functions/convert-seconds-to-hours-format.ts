import { Helper } from '../cms-utils'

export const convertSecondsToHoursFormat = (seconds: number | string) => {
  if (!seconds || !Helper.isNumeric(seconds)) return

  return new Date(+seconds * 1000).toISOString().substr(11, 8)
}
