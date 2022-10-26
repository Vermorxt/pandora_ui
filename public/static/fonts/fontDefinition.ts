import MuseoSansRounded300 from '../assets/fonts/MuseoSansRounded-300.woff2'
import MuseoSansRounded500 from '../assets/fonts/MuseoSansRounded-500.woff2'
import MuseoSansRounded700 from '../assets/fonts/MuseoSansRounded-700.woff2'

type FontDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional' | undefined
type FontWeight = 300 | 500 | 700

type FontFace = {
  fontFamily: string
  fontStyle: string
  fontDisplay: FontDisplay
  fontWeight: FontWeight
  src: string
}

export const museoSansRounded300: FontFace = {
  fontFamily: 'MuseoSansRounded',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  src: `local('MuseoSansRounded'), url(${MuseoSansRounded300}) format('woff2')`,
}

export const museoSansRounded500: FontFace = {
  fontFamily: 'MuseoSansRounded',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  src: `local('MuseoSansRounded'), url(${MuseoSansRounded500}) format('woff2')`,
}

export const museoSansRounded700: FontFace = {
  fontFamily: 'MuseoSansRounded',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  src: `local('MuseoSansRounded'), url(${MuseoSansRounded700}) format('woff2')`,
}

export const museoSansRounded: FontFace[] = [museoSansRounded300, museoSansRounded500, museoSansRounded700]
