import { HTMLProps } from 'react'
export interface Ui_SwapProps extends HTMLProps<HTMLDivElement> {
  swapOn?: string
  swapOff?: string
  swapActive?: 'on' | 'off'
  swapRotate?: boolean
  swapFlip?: boolean
}
