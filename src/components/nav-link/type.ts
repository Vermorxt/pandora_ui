import { HTMLProps } from 'react'
import { I_Ui_Sizes } from '../_types/sizes/sizes'
import { T_Variants } from '../_types/colors/ui_variants'

export interface Ui_NavLinkProps extends HTMLProps<HTMLAnchorElement>, T_Variants, I_Ui_Sizes {
  href: string
  className?: string
  skipScrollTop?: boolean
  useLocationReplace?: boolean
  scrollSmooth?: boolean
}
