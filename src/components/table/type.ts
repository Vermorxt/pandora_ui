import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
export interface Ui_TableProps extends HTMLProps<HTMLTableElement>, Ui_colors {
  active?: boolean
  hover?: boolean
  zebra?: boolean
  stickyHeader?: boolean
  compact?: boolean
  bgColor?: 'primary' | 'secondary'
  textColor?: 'primary' | 'secondary'
}
