import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'
export type TogglePositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Toggle_variants {
  disabled?: boolean
}

export interface Ui_Toggle_singleClass {
  loading?: boolean
  checked?: boolean
  indeterminate?: boolean
  label?: string
  labelPosition?: 'left' | 'right'
}

export interface Ui_ToggleProps
  extends HTMLProps<HTMLSpanElement>,
    Ui_colors,
    Ui_Sizes,
    Ui_Toggle_variants,
    Ui_Toggle_singleClass {
  position?: TogglePositionProps
}
