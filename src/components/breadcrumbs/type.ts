import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_BreadcrumbsProps extends HTMLProps<HTMLSpanElement>, T_Variants, I_Ui_Sizes {}
