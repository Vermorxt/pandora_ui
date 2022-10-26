import { HTMLProps, ReactNode } from 'react'

export interface Ui_FlagProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
  className?: string
  name?: string
}
