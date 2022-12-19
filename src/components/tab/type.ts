import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
export interface Ui_TabProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  id?: string
  active?: boolean
  bordered?: boolean
  lifted?: boolean
  boxed?: boolean
  size?: T_Ui_Size
}
