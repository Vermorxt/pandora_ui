import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'

export type TooltipPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface Ui_Badge_variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_Badge_singleClass {
  loading?: boolean
  noAnimation?: boolean
}

export interface Ui_BadgeProps
  extends HTMLProps<HTMLSpanElement>,
    Ui_colors,
    Ui_Sizes,
    Ui_Badge_variants,
    Ui_Badge_singleClass {
  wide?: boolean
  full?: boolean
}
