import { HTMLProps, ReactNode } from 'react'

export interface Ui_FlexProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
  className?: string
}
