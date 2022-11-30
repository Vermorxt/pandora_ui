import { T_Ui_Size } from 'components/_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

export interface Ui_KbdProps extends Omit<HTMLProps<HTMLSpanElement>, 'size'>, I_Variants {
  size: T_Ui_Size
}
