import { I_Variants } from './../_types/colors/ui_variants'
import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
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

export interface Ui_TooltipProps extends Omit<HTMLProps<HTMLSpanElement>, 'size'>, Ui_Tooltip_variants {
  tooltip?: TooltipProps
  dataTip?: TooltipProps
  position?: TooltipPositionProps
  open?: boolean
  size?: T_Ui_Size
  variant?: I_Variants
}
