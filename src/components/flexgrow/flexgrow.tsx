import { ComponentPropsWithoutRef, CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'

export interface Ui_FlexGrowProps {
  props?: ComponentPropsWithoutRef<'div'>
  style?: CSSProperties
  children?: ReactNode
  className?: string
  onMouseDown?: any
}

const Ui_FlexGrow: FC<Ui_FlexGrowProps> & { Static: FC<Ui_FlexGrowProps>; Full: FC<Ui_FlexGrowProps> } = props => (
  <div style={{ ...style, display: 'flex', width: '100%' }} {...props}>
    {props?.children}
  </div>
)

const Static: FC<Ui_FlexGrowProps> = props => (
  <div style={{ ...style, display: 'block' }} {...props}>
    {props?.children}
  </div>
)
const Full: FC<Ui_FlexGrowProps> = props => (
  <div style={{ ...style, flexGrow: 1 }} {...props}>
    {props?.children}
  </div>
)

Ui_FlexGrow.Static = Static
Ui_FlexGrow.Full = Full

export default Ui_FlexGrow
