import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
export type SelectPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Select_variants {
  disabled?: boolean
}

export interface Ui_Select_singleClass {
  loading?: boolean
  checked?: boolean
  label?: string
  altLabel?: string
  bordered?: boolean
  labelPosition?: 'left' | 'right' | 'top' | 'bottom'
}

export interface Ui_SelectProps
  extends HTMLProps<HTMLSelectElement>,
    T_Variants,
    I_Ui_Sizes,
    Ui_Select_variants,
    Ui_Select_singleClass {
  position?: SelectPositionProps
  options?: any[]
  disabledOptions?: number[]
  optionLabel?: string
  defaultValue?: any
}
