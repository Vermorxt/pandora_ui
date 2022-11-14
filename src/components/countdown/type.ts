import { HTMLProps } from 'react'
import { I_Ui_Sizes, T_Ui_Size } from '../_types/sizes/sizes'

export interface ShowTimeValues {
  useValues: ('day' | 'hour' | 'minute' | 'second')[]
  displayValues?: string[]
}

export type OnFinishCallback = (arg: boolean) => void
export interface Ui_CountdownProps extends Omit<HTMLProps<HTMLDivElement>, 'size'>, I_Ui_Sizes {
  value?: number
  targetTime?: string
  size?: T_Ui_Size
  showTimeValues?: ShowTimeValues
  template?: 'compact' | 'clock' | 'inline' | 'boxed'
  center?: boolean
  finishColor?: string
  onFinishCallback?: OnFinishCallback
}
