import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
import { TooltipProps } from '../_types/tooltip/tooltip-props'

export interface Ui_Button_variants extends I_Variants {
  active?: boolean
  disabled?: boolean
  glass?: boolean
  circle?: boolean
}

export interface Ui_Button_singleClass {
  loading?: boolean
  noAnimation?: boolean
}

export type Ui_ButtonType = 'button' | 'submit' | 'reset' | undefined

export interface Ui_ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'size'>,
    Ui_Button_variants,
    Ui_Button_singleClass {
  size: T_Ui_Size | 'block' | 'wide' | 'full'
  outline?: boolean
  tooltip?: TooltipProps
  type?: Ui_ButtonType
}
