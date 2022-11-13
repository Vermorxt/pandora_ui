import { HTMLProps } from 'react'
import { I_Variants, T_Variants } from '../_types/colors/ui_variants'

interface Ui_Card_style {
  variant?: T_Variants
  bgBase?: '100' | '200' | '300'
  size?: 'w-96' | string
  actionPlacement?: 'start' | 'center' | 'between'
  cardSide?: 'large' | boolean
}
export interface Ui_CardProps extends Omit<HTMLProps<HTMLDivElement>, 'size'>, Ui_Card_style {
  imageAsBackground?: boolean
  compact?: boolean
  itemsCenter?: boolean
  textCenter?: boolean
  glass?: boolean
}
