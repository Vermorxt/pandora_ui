import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_Link_variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_LinkProps extends HTMLProps<HTMLAnchorElement>, T_Variants, I_Ui_Sizes, Ui_Link_variants {
  hover?: boolean
}
