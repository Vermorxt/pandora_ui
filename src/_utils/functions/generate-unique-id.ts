import { Helper } from '../cms-utils'

export const generateUniqId = (): string => {
  const s4 = () =>
    Math.floor(+(`${1}.` + Helper.secureRandomNumber().toString()) * 0x10000)
      .toString(16)
      .substring(1)

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}
