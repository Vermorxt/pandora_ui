import { T_Variants } from 'components/_types/colors/ui_variants'
import { T_Ui_Mask } from 'components/_types/mask/mask'
import { HTMLProps } from 'react'
import { T_Ui_Size } from '../_types/sizes/sizes'

type Ui_BorderRadius = 'xl' | '2xl' | '3xl' | 'lg' | 'full'
type Ui_Ring = 'primary' | 'secondary' | boolean
type Ui_RingOffset = '0' | '1' | '2' | '4' | '8'
type Ui_RingOffsetBackground = T_Variants // NOTE: https://tailwindcss.com/docs/ring-offset-color

interface Ui_Avatar_ring {
  ring?: boolean
  ringPrimary?: boolean
  ringSecondary?: boolean
  ringOffset?: Ui_RingOffset
  ringOffsetBackground?: Ui_RingOffsetBackground
}

interface Ui_Avatar_online {
  online?: boolean
  offline?: boolean
}

export interface Ui_AvatarProps extends Omit<HTMLProps<HTMLDivElement>, 'size'>, Ui_Avatar_online {
  borderRadius?: Ui_BorderRadius
  size?: T_Ui_Size
  mask?: T_Ui_Mask
  ring?: Ui_Ring
  ringOffset?: Ui_RingOffset
  ringOffsetBackground?: Ui_RingOffsetBackground
  src?: string
  usePlaceHolder?: string // NOTE: content of last avatar item (e.g.: +99)
}
