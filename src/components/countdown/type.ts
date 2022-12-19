import { HTMLProps } from 'react'
import { I_Ui_Sizes, T_Ui_Size } from '../_types/sizes/sizes'

export interface ShowTimeValues {
  useValues: ('day' | 'hour' | 'minute' | 'second')[]
  displayValues?: string[]
}

export type T_Ui_CountdownTemplate = 'compact' | 'clock' | 'inline' | 'boxed'

export type OnFinishCallback = (arg: boolean) => void
export interface Ui_CountdownProps extends Omit<HTMLProps<HTMLDivElement>, 'size'>, I_Ui_Sizes {
  value?: number
  targetTime?: string
  size?: T_Ui_Size
  showTimeValues?: ShowTimeValues
  template?: T_Ui_CountdownTemplate
  center?: boolean
  finishColor?: string
  allowMultipleTimers?: boolean
  onFinishCallback?: OnFinishCallback
}
