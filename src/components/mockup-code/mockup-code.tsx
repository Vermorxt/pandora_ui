import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_MockupCodeProps } from './type'
import React from 'react'

const Ui_MockupCode: any = forwardRef<HTMLDivElement, Ui_MockupCodeProps>(
  ({ className, children, style, bgColor, shadow, rounded, ...rest }, ref) => {
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
      mockup-code${' '} 
      ${(className as string) || ''} 
      ${classAttributes}
      ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : 'bg-base-100'}
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

export default Ui_MockupCode
