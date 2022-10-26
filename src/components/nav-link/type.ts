import { HTMLProps } from 'react'
import { Ui_Sizes } from '../_types/sizes/sizes'
import { Ui_colors } from './../_types/colors/ui_colors'

export interface Ui_NavLinkProps extends HTMLProps<HTMLAnchorElement>, Ui_colors, Ui_Sizes {
  href: string
  className?: string
  skipScrollTop?: boolean
  useLocationReplace?: boolean
  scrollSmooth?: boolean
}
