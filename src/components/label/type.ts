import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export type LabelPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_LabelProps extends Omit<HTMLProps<HTMLLabelElement>, 'size'>, I_Variants {
  position?: LabelPositionProps
  as?: 'button'
  htmlFor?: string
  outline?: boolean
  size?: T_Ui_Size
}
