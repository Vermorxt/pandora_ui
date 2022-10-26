import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'
export type RangePositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Range_variants {
  disabled?: boolean
}

export interface Ui_Range_singleClass {
  loading?: boolean
  checked?: boolean
  indeterminate?: boolean
  label?: string
  altLabel?: string
  bordered?: boolean
  labelPosition?: 'left' | 'right' | 'top' | 'bottom'
}

export interface Ui_RangeProps
  extends HTMLProps<HTMLSpanElement>,
    Ui_colors,
    Ui_Sizes,
    Ui_Range_variants,
    Ui_Range_singleClass {
  position?: RangePositionProps
}
