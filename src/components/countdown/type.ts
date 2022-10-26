import { HTMLProps } from 'react'
import { Ui_colors } from '../_types/colors/ui_colors'
import { Ui_Sizes } from '../_types/sizes/sizes'

export interface ShowTimeValues {
  useValues: ('day' | 'hour' | 'minute' | 'second')[]
  displayValues?: string[]
}

export type OnFinishCallback = (arg: boolean) => void
export interface Ui_CountdownProps extends HTMLProps<HTMLDivElement>, Ui_colors, Ui_Sizes {
  value?: number
  targetTime?: string
  showTimeValues?: ShowTimeValues
  template?: 'compact' | 'clock' | 'inline' | 'boxed'
  center?: boolean
  finishColor?: string
  onFinishCallback?: OnFinishCallback
}
