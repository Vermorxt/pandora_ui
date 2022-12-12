import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes, T_Ui_Size } from '../_types/sizes/sizes'

export interface Ui_Link_variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_LinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'size'>, I_Variants, Ui_Link_variants {
  hover?: boolean
  size?: T_Ui_Size
}
