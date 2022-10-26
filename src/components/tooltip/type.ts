import { HTMLProps } from 'react'
import { Ui_Sizes } from '../_types/sizes/sizes'
export type TooltipPositionProps = 'top' | 'left' | 'bottom' | 'right'

export interface TooltipProps {
  content: string
  position?: TooltipPositionProps
}

export interface Ui_Tooltip_variants {
  open?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_TooltipProps extends HTMLProps<HTMLSpanElement>, Ui_Sizes, Ui_Tooltip_variants {
  tooltip?: TooltipProps
  dataTip?: TooltipProps
  position?: TooltipPositionProps
  open?: boolean
}
