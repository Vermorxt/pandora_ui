import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

export interface Ui_InputGroupProps extends Omit<HTMLProps<HTMLLabelElement>, 'size'>, I_Variants {
  vertical?: boolean
  size?: T_Ui_Size
}
