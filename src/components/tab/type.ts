import { HTMLProps } from 'react'
import { Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_TabProps extends HTMLProps<HTMLDivElement>, Ui_Sizes {
  id?: string
  active?: boolean
  bordered?: boolean
  lifted?: boolean
  boxed?: boolean
}
