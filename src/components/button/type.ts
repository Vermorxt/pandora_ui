import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
import { TooltipProps } from '../_types/tooltip/tooltip-props'

export interface Ui_Button_variants extends I_Variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_Button_singleClass {
  loading?: boolean
  noAnimation?: boolean
}

export interface Ui_Button_sizes extends I_Ui_Sizes {
  wide?: boolean
  block?: boolean
  circle?: boolean
  square?: boolean
  full?: boolean
}

export type Ui_ButtonType = 'button' | 'submit' | 'reset' | undefined

export interface Ui_ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    Ui_Button_sizes,
    Ui_Button_variants,
    Ui_Button_singleClass {
  tooltip?: TooltipProps
  type?: Ui_ButtonType
}
