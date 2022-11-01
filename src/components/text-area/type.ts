import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
export type TextAreaPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_TextArea_variants {
  disabled?: boolean
}

export interface Ui_TextArea_singleClass {
  loading?: boolean
  checked?: boolean
  indeterminate?: boolean
  label?: string
  altLabel?: string
  bordered?: boolean
  labelPosition?: 'left' | 'right' | 'top' | 'bottom'
}

export interface Ui_TextAreaProps
  extends HTMLProps<HTMLSpanElement>,
    T_Variants,
    I_Ui_Sizes,
    Ui_TextArea_variants,
    Ui_TextArea_singleClass {
  position?: TextAreaPositionProps
}
