import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'

export interface Ui_MockupCodeProps extends HTMLProps<HTMLDivElement>, T_Variants {
  bgColor?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
}
