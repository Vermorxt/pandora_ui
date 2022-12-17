import { T_Ui_Size } from 'components/_types/sizes/sizes'
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
  extends Omit<HTMLProps<HTMLSpanElement>, 'size'>,
    I_Variants,
    Ui_Radio_variants,
    Ui_Radio_singleClass {
  position?: RadioPositionProps
  dataTitle?: string
  size?: T_Ui_Size
}
