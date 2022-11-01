import { HTMLProps } from 'react'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_TabProps extends HTMLProps<HTMLDivElement>, I_Ui_Sizes {
  id?: string
  active?: boolean
  bordered?: boolean
  lifted?: boolean
  boxed?: boolean
}
