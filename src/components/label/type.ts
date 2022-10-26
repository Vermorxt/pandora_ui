import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'

export type LabelPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_LabelProps extends HTMLProps<HTMLLabelElement>, Ui_colors, Ui_Sizes {
  position?: LabelPositionProps
  as?: 'button'
  htmlFor?: string
  outline?: boolean
}
