import { I_Ui_Sizes } from './../_types/sizes/sizes'
import { I_Variants } from '../_types/colors/ui_variants'
import { HTMLProps, MouseEventHandler } from 'react'

export interface Ui_AlertProps extends I_Variants, Omit<HTMLProps<HTMLDivElement>, 'size'> {
  size?: I_Ui_Sizes
  noIcon?: boolean
  onDenyButtonText?: string
  onAcceptButtonText?: string
  onDeny?: MouseEventHandler<HTMLButtonElement> | undefined
  onAccept?: MouseEventHandler<HTMLButtonElement> | undefined
}
