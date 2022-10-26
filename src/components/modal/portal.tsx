import { FC, ReactNode, ReactPortal } from 'react'
import ReactDOM from 'react-dom'
import React from 'react'

export interface PortalProps {
  target: Element
  children: ReactNode
}

const Portal: FC<PortalProps> = ({ children, target }) =>
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  ReactDOM.createPortal(children as any, target) as ReactPortal

export default Portal
