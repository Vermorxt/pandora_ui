import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'

export interface Ui_MockupWindowProps extends HTMLProps<HTMLSpanElement>, Ui_colors {
  bgColor?: string
  border?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
}
