import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
export interface Ui_StatProps extends HTMLProps<HTMLDivElement>, Ui_colors {
  center?: boolean
  vertical?: boolean
  onLargeHorizontal?: boolean
  bgColor?: 'primary' | 'secondary'
  textColor?: 'primary' | 'secondary'
}
