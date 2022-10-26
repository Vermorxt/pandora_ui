import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_MenuProps } from './type'
import React from 'react'

const Ui_Menu = forwardRef<HTMLUListElement, Ui_MenuProps>(
  ({ className, children, style, hover, rounded, shadow, bgColor, horizontal, ...rest }, ref) => {
    const withoutPrefix_badge = [] as string[]
    const convertAttributeToClassName_badge = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_badge,
      withoutPrefix: withoutPrefix_badge,
      addPrefix: 'text',
    })

    return (
      <ul
        className={`
      menu${' '} 
      ${(className as string) || ''} 
      ${classAttributes} 
      ${hover ? `menu-hover` : ''}
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
