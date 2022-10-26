import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'
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
    Ui_colors,
    Ui_Sizes,
    Ui_Radio_variants,
    Ui_Radio_singleClass {
  position?: RadioPositionProps
  dataTitle?: string
}
