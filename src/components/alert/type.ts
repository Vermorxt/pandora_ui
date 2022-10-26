import { Ui_colors } from '../_types/colors/ui_colors'
import { HTMLProps, MouseEventHandler } from 'react'

export interface Ui_AlertProps extends HTMLProps<HTMLDivElement>, Ui_colors {
  noIcon?: boolean
  onDenyButtonText?: string
  onAcceptButtonText?: string
  onDeny?: MouseEventHandler<HTMLButtonElement> | undefined
  onAccept?: MouseEventHandler<HTMLButtonElement> | undefined
}
