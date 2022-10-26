import { HTMLProps, ReactNode } from 'react'

export interface Ui_GridProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
  className?: string
}
