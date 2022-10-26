import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'

export type InputPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Input_variants {
  disabled?: boolean
}

export interface Ui_Input_singleClass {
  loading?: boolean
  checked?: boolean
  indeterminate?: boolean
  label?: string
  altLabel?: string
  bordered?: boolean
  labelPosition?: InputPositionProps
}

export interface Ui_InputProps
  extends HTMLProps<HTMLSpanElement>,
    Ui_colors,
    Ui_Sizes,
    Ui_Input_variants,
    Ui_Input_singleClass {
  position?: InputPositionProps
}
