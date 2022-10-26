import { HTMLProps } from 'react'
export interface Ui_StepsProps extends HTMLProps<HTMLUListElement> {
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
  id?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  vertical?: boolean
  itemsCenter?: boolean
  dataContent?: string
  bgColor?: string
}
