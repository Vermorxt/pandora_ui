import { I_Ui_Sizes } from './../_types/sizes/sizes'
import { HTMLProps, ReactElement, ReactNode } from 'react'
import { AnyType } from '../../_types/AnyType'
import { Ui_Button_singleClass, Ui_Button_variants } from '../button/type'
import { I_Variants } from '../_types/colors/ui_variants'

export interface Ui_DropdownPosition {
  top?: boolean
  left?: boolean
  end?: boolean
  right?: boolean
}
export interface Ui_DropdownType {
  full?: boolean
  card?: boolean
}
export interface Ui_DropdownAction {
  hover?: boolean
  open?: boolean
}
export interface Ui_DropdownProps
  extends Omit<HTMLProps<Element>, 'content'>,
    I_Variants,
    Ui_DropdownPosition,
    Ui_DropdownType,
    I_Ui_Sizes,
    Ui_Button_variants,
    Ui_Button_singleClass,
    Ui_DropdownAction {
  children?: ReactNode
  className?: string
  tabIndex?: number
  content?: ReactElement<AnyType>
}
