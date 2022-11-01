import { HTMLProps } from 'react'
import { T_Variants } from '../_types/colors/ui_variants'
import { I_Ui_Sizes } from '../_types/sizes/sizes'

export interface ShowTimeValues {
  useValues: ('day' | 'hour' | 'minute' | 'second')[]
  displayValues?: string[]
}

export type OnFinishCallback = (arg: boolean) => void
export interface Ui_CountdownProps extends HTMLProps<HTMLDivElement>, T_Variants, I_Ui_Sizes {
  value?: number
  targetTime?: string
  showTimeValues?: ShowTimeValues
  template?: 'compact' | 'clock' | 'inline' | 'boxed'
  center?: boolean
  finishColor?: string
  onFinishCallback?: OnFinishCallback
}
