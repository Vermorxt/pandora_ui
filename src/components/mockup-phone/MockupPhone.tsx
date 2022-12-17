import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_MockupPhoneProps } from './type'
import React from 'react'

const Ui_MockupPhone: any = forwardRef<HTMLDivElement, Ui_MockupPhoneProps>(
  ({ className, children, style, bgColor, border, shadow, rounded, size, ...rest }, ref) => {
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
      mockup-phone${' '} 
      ${(className as string) || ''} 
      ${classAttributes}
      ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
      ${border ? `border-${border}` : ''}
      ${size && size === 'large' ? 'mockup-code-lg' : ''}
      ${size && size === 'medium' ? 'mockup-code-md' : ''} 
      ${size && size === 'small' ? 'mockup-code-sm' : ''} 
      ${size && size === 'mini' ? 'mockup-code-xs' : ''} 
      ${size && size === 'tiny' ? 'mockup-code-xxs' : ''}
      ${rounded && typeof rounded === 'boolean' ? 'rounded-box' : ''}
      ${rounded && typeof rounded === 'string' ? `rounded-${rounded}` : ''}
      ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
      `}
        style={style}
        ref={ref}
      >
        <div className="camera"></div>
        <div className="display">{children}</div>
      </div>
    )
  }
)

export default Ui_MockupPhone
