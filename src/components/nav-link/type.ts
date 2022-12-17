import { T_Ui_Size } from 'components/_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

export interface Ui_NavLinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'size'>, I_Variants {
  hover?: boolean
  size?: T_Ui_Size
  href: string
  className?: string
  skipScrollTop?: boolean
  useLocationReplace?: boolean
  scrollSmooth?: boolean
}
