import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export type LabelPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_LabelProps extends HTMLProps<HTMLLabelElement>, I_Variants, I_Ui_Sizes {
  position?: LabelPositionProps
  as?: 'button'
  htmlFor?: string
  outline?: boolean
}
