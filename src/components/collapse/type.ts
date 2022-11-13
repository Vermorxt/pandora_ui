import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
export interface Ui_CollapseProps extends HTMLProps<HTMLDivElement>, I_Variants {
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
