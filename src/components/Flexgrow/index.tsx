import { ComponentProps, ComponentPropsWithoutRef, CSSProperties, FC, ReactNode } from 'react'
import React from 'react'

export interface Ui_FlexGrowProps {
  props?: ComponentProps<any>
  style?: CSSProperties
  children?: ReactNode
  className?: string
  onMouseDown?: any
}

const Ui_FlexGrow: FC<Ui_FlexGrowProps> & { Static: FC<Ui_FlexGrowProps>; Full: FC<Ui_FlexGrowProps> } = props => (
  <div {...props} style={{ display: 'flex', width: '100%', ...props?.style }}>
    {props?.children}
  </div>
)

const Static: FC<Ui_FlexGrowProps> = props => (
  <div {...props} style={{ display: 'block', ...props?.style }}>
    {props?.children}
  </div>
)
const Full: FC<Ui_FlexGrowProps> = props => (
  <div {...props} style={{ ...props?.style, flexGrow: 1 }}>
    {props?.children}
  </div>
)

Ui_FlexGrow.Static = Static
Ui_FlexGrow.Full = Full

export default Ui_FlexGrow
