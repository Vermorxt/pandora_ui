import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
export interface Ui_TableProps extends HTMLProps<HTMLTableElement>, T_Variants {
  active?: boolean
  hover?: boolean
  zebra?: boolean
  stickyHeader?: boolean
  compact?: boolean
  bgColor?: 'primary' | 'secondary'
  textColor?: 'primary' | 'secondary'
}
