import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_MenuProps } from './type'
import React from 'react'

const Ui_Menu = forwardRef<HTMLUListElement, Ui_MenuProps>(
  ({ className, children, style, hover, rounded, shadow, bgColor, horizontal, size, ...rest }, ref) => {
    return (
      <ul
        className={`
      menu${' '} 
      ${(className as string) || ''} 
      ${hover ? `menu-hover` : ''}
      ${size && size === 'large' ? 'text-lg' : ''}
      ${size && size === 'medium' ? 'text-md' : ''} 
      ${size && size === 'small' ? 'text-sm' : ''} 
      ${size && size === 'mini' ? 'text-xs' : ''} 
      ${size && size === 'tiny' ? 'text-xxs' : ''}
      ${horizontal ? 'menu-horizontal' : ''} 
      ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
      ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
      ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : 'bg-base-200'}

      `}
        style={style}
        ref={ref}
      >
        {children}
      </ul>
    )
  }
)

export default Ui_Menu
