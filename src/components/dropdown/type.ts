import { T_Ui_Size } from '../_types/sizes/sizes'
import { HTMLProps, ReactElement, ReactNode } from 'react'
import { AnyType } from '../../_types/AnyType'
import { Ui_Button_singleClass } from '../button/type'
import { I_Variants } from '../_types/colors/ui_variants'

export type T_Ui_DropdownPosition = 'top' | 'left' | 'bottom' | 'right'
export type T_Ui_DropdownType = 'full' | 'card'
export type T_Ui_DropdownAction = 'hover' | 'open'

export interface Ui_DropdownProps
  extends Omit<HTMLProps<Element>, 'content' | 'size'>,
    I_Variants,
    Ui_Button_singleClass {
  action?: T_Ui_DropdownAction
  position?: T_Ui_DropdownPosition
  type?: T_Ui_DropdownType
  size?: T_Ui_Size | 'block' | 'full' | 'wide'
  children?: ReactNode
  outline?: boolean
  className?: string
  tabIndex?: number
  content?: ReactElement<AnyType>
}
