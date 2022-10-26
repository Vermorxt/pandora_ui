import { HTMLProps, ReactElement, ReactNode } from 'react'
import { AnyType } from '../../_types/AnyType'
import { Ui_Button_singleClass, Ui_Button_sizes, Ui_Button_variants } from '../button/type'
import { Ui_colors } from '../_types/colors/ui_colors'

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
    Ui_colors,
    Ui_DropdownPosition,
    Ui_DropdownType,
    Ui_Button_sizes,
    Ui_Button_variants,
    Ui_Button_singleClass,
    Ui_DropdownAction {
  children?: ReactNode
  className?: string
  tabIndex?: number
  content?: ReactElement<AnyType>
}
