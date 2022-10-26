import { Ui_colors } from './../_types/colors/ui_colors'
import { HTMLProps } from 'react'

export interface Ui_ArtboardProps extends HTMLProps<HTMLSpanElement>, Ui_colors {
  phone1?: boolean
  phone2?: boolean
  phone3?: boolean
  phone4?: boolean
  phone5?: boolean
  phone6?: boolean
  horizontal?: boolean
  demo?: boolean
}
