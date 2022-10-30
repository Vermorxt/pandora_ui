import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_MockupWindowProps } from './type'
import React from 'react'

const Ui_MockupWindow: any = forwardRef<HTMLDivElement, Ui_MockupWindowProps>(
  ({ className, children, style, bgColor, border, shadow, rounded, ...rest }, ref) => {
    const convertAttributeToClassName_progress = [
      ['large', 'medium', 'small', 'tiny'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_progress,
      withoutPrefix: [],
      addPrefix: 'mockup-code',
    })

    return (
      <div
        className={`
      mockup-window${' '} 
      ${(className as string) || ''} 
      ${classAttributes}
      ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
      ${border ? `border border-${border}` : ''}
      ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
      ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_MockupWindow
