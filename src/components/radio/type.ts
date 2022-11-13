import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
export type RadioPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Radio_variants {
  disabled?: boolean
}

export interface Ui_Radio_singleClass {
  loading?: boolean
  checked?: boolean
  indeterminate?: boolean
  label?: string
  labelPosition?: 'left' | 'right'
}

export interface Ui_RadioProps
  extends HTMLProps<HTMLSpanElement>,
    I_Variants,
    I_Ui_Sizes,
    Ui_Radio_variants,
    Ui_Radio_singleClass {
  position?: RadioPositionProps
  dataTitle?: string
}
