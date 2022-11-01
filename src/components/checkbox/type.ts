import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
export type CheckboxPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Checkbox_variants {
  disabled?: boolean
}

export interface Ui_Checkbox_singleClass {
  loading?: boolean
  checked?: boolean
  indeterminate?: boolean
  label?: string
  labelPosition?: 'left' | 'right'
}

export interface Ui_CheckboxProps
  extends HTMLProps<HTMLInputElement>,
    T_Variants,
    I_Ui_Sizes,
    Ui_Checkbox_variants,
    Ui_Checkbox_singleClass {
  position?: CheckboxPositionProps
}
