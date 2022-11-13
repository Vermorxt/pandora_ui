import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
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
    I_Variants,
    I_Ui_Sizes,
    Ui_Range_variants,
    Ui_Range_singleClass {
  position?: RangePositionProps
}
