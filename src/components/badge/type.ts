import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

export interface Ui_Badge_variants {
  outline?: boolean
}

export interface Ui_BadgeProps extends Omit<HTMLProps<HTMLSpanElement>, 'size'>, I_Variants, Ui_Badge_variants {
  size?: T_Ui_Size
}
