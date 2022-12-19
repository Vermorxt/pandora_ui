import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
export type TogglePositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Toggle_variants {
  disabled?: boolean
}

export interface Ui_Toggle_singleClass {
  loading?: boolean
  checked?: boolean
  indeterminate?: boolean
  label?: string
  labelPosition?: 'left' | 'right'
}

export interface Ui_ToggleProps
  extends Omit<HTMLProps<HTMLSpanElement>, 'size'>,
    I_Variants,
    Ui_Toggle_variants,
    Ui_Toggle_singleClass {
  position?: TogglePositionProps
  // size?: T_Ui_Size
}
