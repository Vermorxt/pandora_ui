import { HTMLProps } from 'react'

export interface Ui_HeroProps extends HTMLProps<HTMLDivElement> {
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
  id?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  bgColor?: string
  center?: boolean
  itemsCenter?: boolean
  minHeightScreen?: boolean
  flexCol?: boolean
  flexColReverse?: boolean
  textCenter?: boolean
}
