import { T_Ui_Size } from 'components/_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

export interface Ui_Menu_variants {
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
}

export interface Ui_MenuProps extends Omit<HTMLProps<HTMLUListElement>, 'size'>, I_Variants, Ui_Menu_variants {
  hover?: boolean
  horizontal?: boolean
  size?: T_Ui_Size
  bgColor?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
}
