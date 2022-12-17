import { T_Ui_Size } from 'components/_types/sizes/sizes'
import { ChangeEventHandler, HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export interface Ui_Rating_variants {
  disabled?: boolean
}

export interface Ui_Rating_singleClass {
  loading?: boolean
  noAnimation?: boolean
}

export type OnChange = (arg1?: { value?: number }) => void & ChangeEventHandler<HTMLInputElement>

export interface Ui_RatingProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'size'>,
    I_Variants,
    Ui_Rating_variants,
    Ui_Rating_singleClass {
  onChange?: OnChange
  halfSymbol?: boolean
  shape?: 'star' | 'star-2' | 'heart'
  defaultCheckedValue?: number
  size?: T_Ui_Size
}
