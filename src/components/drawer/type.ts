import { HTMLProps } from 'react'
import { AnyType } from '../../_types/AnyType'
export interface Ui_DrawerProps extends HTMLProps<HTMLDivElement> {
  menuItems?: AnyType[]
  defaultOpenOnLargeScreen?: boolean
  opensRight?: boolean
  isNavbar?: boolean
  id?: string
}
