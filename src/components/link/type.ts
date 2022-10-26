import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_Link_variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_LinkProps extends HTMLProps<HTMLAnchorElement>, Ui_colors, Ui_Sizes, Ui_Link_variants {
  hover?: boolean
}
