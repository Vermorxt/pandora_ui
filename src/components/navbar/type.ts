import { HTMLProps } from 'react'
export interface Ui_NavbarProps extends HTMLProps<HTMLDivElement> {
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
  id?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  bgColor?: string
}
