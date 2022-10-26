import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
interface Ui_Card_style {
  bgPrimary?: boolean
  bgSecondary?: boolean
  bgNeutral?: boolean
  textPrimaryContent?: boolean
  textSecondaryContent?: boolean
  textNeutralContent?: boolean
  bgBase?: '100' | '200' | '300'
}
export interface Ui_CardProps extends HTMLProps<HTMLDivElement>, Ui_Card_style {
  imageAsBackground?: boolean
  compact?: boolean
  itemsCenter?: boolean
  textCenter?: boolean
  glass?: boolean
  cardSide?: boolean
  cardSideLarge?: boolean
  w96?: boolean
  actionCenter?: boolean
  actionStart?: boolean
  actionSpaceBetween?: boolean
}
