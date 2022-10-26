import { HTMLProps } from 'react'

export interface Ui_Indicator_positions {
  top?: boolean
  bottom?: boolean
  middle?: boolean
  center?: boolean
  start?: boolean
  end?: boolean
}

export interface Ui_IndicatorProps extends Omit<HTMLProps<HTMLDivElement>, 'start'>, Ui_Indicator_positions {
  rounded?: boolean | string // NOTE: see: https://tailwindcss.com/docs/border-radius#rounded-corners
  id?: string
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
  bgColor?: string
  color?: string
  badge?: boolean
}
