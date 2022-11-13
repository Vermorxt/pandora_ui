import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_Progress_variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_Progress_singleClass {
  loading?: boolean
}

export interface Ui_Progress_sizes extends I_Ui_Sizes {
  wide?: boolean
  block?: boolean
  circle?: boolean
  square?: boolean
}

export type Ui_ProgressType = 'button' | 'submit' | 'reset' | undefined

export interface Ui_ProgressProps
  extends HTMLProps<HTMLProgressElement>,
    I_Variants,
    Ui_Progress_sizes,
    Ui_Progress_variants,
    Ui_Progress_singleClass {
  type?: Ui_ProgressType
}
