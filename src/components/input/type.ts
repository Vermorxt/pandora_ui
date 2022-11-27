import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { T_Ui_Size } from '../_types/sizes/sizes'

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
  extends Omit<HTMLProps<HTMLSpanElement>, 'size'>,
    I_Variants,
    Ui_Input_variants,
    Ui_Input_singleClass {
  size?: T_Ui_Size
}
