import { FC, forwardRef } from 'react'
import { Ui_NavbarProps } from './type'
import React from 'react'

const Ui_Navbar: any = forwardRef<
  HTMLDivElement,
  Ui_NavbarProps & { Start: FC<Ui_NavbarProps>; Center: FC<Ui_NavbarProps>; End: FC<Ui_NavbarProps> }
>(({ children, className, id, shadow, bgColor, rounded, style }, ref) => {
  return (
    <div
      className={`
    navbar ${className ? className : ''} 
    ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
    ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
    ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : 'bg-base-100'}
    `}
      id={id}
      style={style}
      ref={ref}
    >
      {children}
    </div>
  )
})

export const Start: FC = forwardRef<HTMLDivElement, Ui_NavbarProps>(({ children, className, style }, ref) => {
  return (
    <div className={`navbar-start ${className ? className : ''} `} style={style} ref={ref}>
      {children}
    </div>
  )
})

export const Center: FC = forwardRef<HTMLDivElement, Ui_NavbarProps>(({ children, className, style }, ref) => {
  return (
    <div className={`navbar-center ${className ? className : ''} `} style={style} ref={ref}>
      {children}
    </div>
  )
})

export const End: FC = forwardRef<HTMLDivElement, Ui_NavbarProps>(({ children, className, style }, ref) => {
  return (
    <div className={`navbar-end ${className ? className : ''} `} style={style} ref={ref}>
      {children}
    </div>
  )
})

Ui_Navbar.Start = Start
Ui_Navbar.Center = Center
Ui_Navbar.End = End

export default Ui_Navbar
