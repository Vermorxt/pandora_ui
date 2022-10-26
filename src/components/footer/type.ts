import { HTMLProps } from 'react'

export type ShadowClasses = 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
export interface Ui_FooterProps extends HTMLProps<HTMLElement> {
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
  id?: string
  shadow?: ShadowClasses
  bgColor?: string
  center?: boolean
  itemsCenter?: boolean
}
