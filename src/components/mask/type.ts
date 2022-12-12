import { HTMLProps } from 'react'
import { I_Variants } from '../_types/colors/ui_variants'

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

export type T_Ui_Mask_shapes =
  | 'squircle'
  | 'hexagon'
  | 'triangle'
  | 'triangle2'
  | 'triangle3'
  | 'triangle4'
  | 'heart'
  | 'hexagon2'
  | 'decagon'
  | 'pentagon'
  | 'diamond'
  | 'square'
  | 'circle'
  | 'parallelogram'
  | 'parallelogram2'
  | 'parallelogram3'
  | 'parallelogram4'
  | 'star'
  | 'star2'

export interface Ui_MaskProps extends HTMLProps<HTMLImageElement>, I_Variants {
  src?: string
  shape?: T_Ui_Mask_shapes
}
