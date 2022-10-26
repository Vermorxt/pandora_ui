import { FC, forwardRef } from 'react'
import { Ui_FooterProps } from './type'
import React from 'react'

const FooterTitle = forwardRef<HTMLDivElement, Ui_FooterProps>(({ children, className, style, ...rest }, ref) => {
  return (
    <div className={`footer-title ${className ? className : ''} `} style={style} ref={ref}>
      {children}
    </div>
  )
})
interface FooterComponent extends FC<Ui_FooterProps> {
  Title: typeof FooterTitle
}

const Ui_Footer: FC<Ui_FooterProps> & FooterComponent = ({
  children,
  className,
  id,
  shadow,
  bgColor,
  rounded,
  center,
  itemsCenter,
  style,
  ...rest
}) => {
  return (
    <footer
      className={`
            footer ${className ? className : 'p-10'} 
            ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
            ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
            ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : 'bg-base-300'}
            ${center ? `footer-center` : ''}
            ${itemsCenter ? `items-center` : ''}
            `}
      id={id}
      style={style}
    >
      {children}
    </footer>
  )
}

Ui_Footer.Title = FooterTitle

export default Ui_Footer
