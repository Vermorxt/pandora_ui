import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'

export interface Ui_Mask_shapes {
  squircle?: boolean
  hexagon?: boolean
  hexagon2?: boolean
  triangle?: boolean
  triangle2?: boolean
  triangle3?: boolean
  triangle4?: boolean
  heart?: boolean
  decagon?: boolean
  pentagon?: boolean
  diamond?: boolean
  square?: boolean
  circle?: boolean
  parallelogram?: boolean
  parallelogram2?: boolean
  parallelogram3?: boolean
  parallelogram4?: boolean
  star?: boolean
  star2?: boolean
}

export interface Ui_MaskProps extends HTMLProps<HTMLImageElement>, Ui_colors, Ui_Mask_shapes {
  src?: string
}
