import { T_Variants } from 'components/_types/colors/ui_variants'
import { T_Ui_Size } from 'components/_types/sizes/sizes'
import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

export interface BottomNavigation {
  id?: string | number
  title?: string
  active?: boolean
  disabled?: boolean
  onClick?: (args?: any) => void
  icon?: { __html: string }
}

export interface Ui_BottomNavigationProps extends Omit<HTMLProps<HTMLDivElement>, 'size'>, I_Variants {
  size?: T_Ui_Size
  className?: string
  activeColor?: T_Variants
  navigation?: BottomNavigation[]
  bgColor?: T_Variants
  rounded?: boolean
  shadow?: 'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean
}
