import { T_Ui_Size } from './../../components/_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

export interface Ui_MockupPhoneProps extends Omit<HTMLProps<HTMLDivElement>, 'size'>, I_Variants {
  bgColor?: string
  border?: string
  size?: T_Ui_Size
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
}
