import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
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
  hideStepLabel?: boolean
}

export interface Ui_RangeProps
  extends Omit<HTMLProps<HTMLInputElement>, 'size'>,
    I_Variants,
    Ui_Range_variants,
    Ui_Range_singleClass {
  position?: RangePositionProps
  size?: T_Ui_Size
}
