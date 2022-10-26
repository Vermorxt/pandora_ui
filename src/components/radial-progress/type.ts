import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from './../_types/sizes/sizes'

export interface Ui_RadialProgress_variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_RadialProgress_singleClass {
  loading?: boolean
  noAnimation?: boolean
}

export interface Ui_RadialProgress_sizes extends Ui_Sizes {
  wide?: boolean
  block?: boolean
  circle?: boolean
  square?: boolean
}

export type Ui_RadialProgressType = 'button' | 'submit' | 'reset' | undefined

export interface Ui_RadialProgressProps
  extends Omit<HTMLProps<HTMLDivElement>, 'size'>,
    Ui_colors,
    Ui_RadialProgress_sizes,
    Ui_RadialProgress_variants,
    Ui_RadialProgress_singleClass {
  type?: Ui_RadialProgressType
  value?: number
  thickness?: string
  size?: string
  primary?: boolean
  secondary?: boolean
  textPrimary?: boolean
  textSecondary?: boolean
}
