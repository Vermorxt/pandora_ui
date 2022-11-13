import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
export interface Ui_StatProps extends HTMLProps<HTMLDivElement>, I_Variants {
  center?: boolean
  vertical?: boolean
  onLargeHorizontal?: boolean
  bgColor?: 'primary' | 'secondary'
  textColor?: 'primary' | 'secondary'
}
