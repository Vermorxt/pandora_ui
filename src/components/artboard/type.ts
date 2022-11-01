import { T_Variants } from '../_types/colors/ui_variants'
import { HTMLProps } from 'react'

export interface Ui_ArtboardProps extends HTMLProps<HTMLSpanElement>, T_Variants {
  phone1?: boolean
  phone2?: boolean
  phone3?: boolean
  phone4?: boolean
  phone5?: boolean
  phone6?: boolean
  horizontal?: boolean
  demo?: boolean
}
