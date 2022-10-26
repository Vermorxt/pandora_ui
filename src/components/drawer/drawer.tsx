import { FC, forwardRef } from 'react'
import { Ui_DrawerProps } from './type'
import React from 'react'

export const Ui_Drawer: any = forwardRef<
  HTMLDivElement,
  Ui_DrawerProps & { Content: FC<Ui_DrawerProps>; Side: FC<Ui_DrawerProps> }
>(({ children, className, menuItems, defaultOpenOnLargeScreen, opensRight, id, style, ...rest }, ref) => {
  return (
    <div
      className={`
    drawer ${className ? className : ''} 
    ${defaultOpenOnLargeScreen ? 'drawer-mobile' : ''}
    ${opensRight ? 'drawer-end' : ''}
    `}
      ref={ref}
      style={style}
    >
      <input id={id} type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  )
})

const Content: FC = forwardRef<HTMLDivElement, Ui_DrawerProps>(
  ({ children, className, id, isNavbar, ...rest }, ref) => {
    return (
      <div
        className={`drawer-content flex flex-col items-center ${className ? className : ''}`}
        id="main-content"
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

const Side: FC = forwardRef<HTMLDivElement, Ui_DrawerProps>(({ children, className, id, ...rest }, ref) => {
  return (
    <div className={`drawer-side ${className ? className : ''}`} ref={ref}>
      <label htmlFor={id} className="drawer-overlay z-10"></label>
      {children}
    </div>
  )
})

Ui_Drawer.Content = Content
Ui_Drawer.Side = Side

export default Ui_Drawer
