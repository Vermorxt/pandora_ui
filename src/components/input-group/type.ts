import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_InputGroupProps extends HTMLProps<HTMLLabelElement>, I_Variants, I_Ui_Sizes {
  vertical?: boolean
}
