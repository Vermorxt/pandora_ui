import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes, T_Ui_Size } from '../_types/sizes/sizes'
export type CheckboxPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Checkbox_variants {
  disabled?: boolean
}

export interface Ui_Checkbox_singleClass {
  checked?: boolean
  indeterminate?: boolean
  label?: string
  labelPosition?: 'left' | 'right'
}

export interface Ui_CheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, 'size'>,
    I_Variants,
    Ui_Checkbox_variants,
    Ui_Checkbox_singleClass {
  position?: CheckboxPositionProps
  size?: T_Ui_Size
}
