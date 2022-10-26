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

export interface Ui_ModalProps extends HTMLProps<HTMLLabelElement>, Ui_Modal_sizes, Ui_Modal_variants {
  buttonText?: string
  message?: string
  id: string
}
