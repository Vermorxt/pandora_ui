import { T_Ui_Size } from './../_types/sizes/sizes'
import { HTMLProps } from 'react'
interface Ui_Modal_sizes {
  large?: boolean
  medium?: boolean
  small?: boolean
  tiny?: boolean
  full?: boolean
}

interface Ui_Modal_variants {
  closeClickOutside?: boolean
}

export interface Ui_ModalProps extends Omit<HTMLProps<HTMLLabelElement>, 'size'>, Ui_Modal_variants {
  buttonText?: string
  message?: string
  id?: string
  labelStyle?: React.CSSProperties
  labelClassName?: string
  isOpen?: boolean
  size?: T_Ui_Size & 'full'
}
