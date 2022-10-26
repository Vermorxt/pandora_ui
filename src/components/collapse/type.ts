import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
export interface Ui_CollapseProps extends HTMLProps<HTMLDivElement>, Ui_colors {
  focus?: boolean
  border?: boolean
  rounded?: boolean
  arrow?: boolean
  plus?: boolean
  open?: boolean
  defaultOpen?: boolean
  close?: boolean
  group?: boolean
  bgColor?: 'primary' | 'secondary' | 'neutral'
  bgColorOpened?: 'primary' | 'secondary' | 'neutral'
}
