import { I_Variants } from './../_types/colors/ui_variants'
import { HTMLProps } from 'react'
export interface Ui_StepsProps extends HTMLProps<HTMLUListElement> {
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
  id?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  vertical?: boolean
  itemsCenter?: boolean
  dataContent?: string
  bgColor?: string
  variant?: I_Variants
}
