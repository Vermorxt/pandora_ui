import { HTMLProps } from 'react'
import { Ui_Sizes } from '../_types/sizes/sizes'

interface Ui_Avatar_radius {
  roundedXl?: boolean
  rounded2xl?: boolean
  rounded3xl?: boolean
  roundedLg?: boolean
  roundedFull?: boolean
}

interface Ui_Avatar_ring {
  ring?: boolean
  ringPrimary?: boolean
  ringSecondary?: boolean
  ringOffset?: '0' | '1' | '2' | '4' | '8'
  ringOffsetBackground?: string // NOTE: https://tailwindcss.com/docs/ring-offset-color
}

interface Ui_Avatar_shapes {
  squircle?: boolean
  hexagon?: boolean
  triangle?: boolean
}

interface Ui_Avatar_online {
  online?: boolean
  offline?: boolean
}

export interface Ui_AvatarProps
  extends HTMLProps<HTMLDivElement>,
    Ui_Sizes,
    Ui_Avatar_radius,
    Ui_Avatar_shapes,
    Ui_Avatar_online,
    Ui_Avatar_ring {
  src?: string
  usePlaceHolder?: string // NOTE: content of last avatar item (e.g.: +99)
}
