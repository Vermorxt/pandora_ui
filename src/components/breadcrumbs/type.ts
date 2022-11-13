import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { T_Ui_Size } from '../_types/sizes/sizes'

export interface Ui_BreadcrumbsProps extends Omit<HTMLProps<HTMLSpanElement>, 'size'>, I_Variants {
  size?: T_Ui_Size
}
