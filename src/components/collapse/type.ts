import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
export interface Ui_CollapseProps extends HTMLProps<HTMLDivElement>, T_Variants {
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
