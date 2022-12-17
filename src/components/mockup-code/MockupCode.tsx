import { forwardRef } from 'react'
import { Ui_MockupCodeProps } from './type'
import React from 'react'

const Ui_MockupCode: any = forwardRef<HTMLDivElement, Ui_MockupCodeProps>(
  ({ className, children, style, bgColor, shadow, rounded, size, ...rest }, ref) => {
    return (
      <div
        className={`
      mockup-code${' '} 
      ${(className as string) || ''} 
      ${size && size === 'large' ? 'mockup-code-lg' : ''}
      ${size && size === 'medium' ? 'mockup-code-md' : ''} 
      ${size && size === 'small' ? 'mockup-code-sm' : ''} 
      ${size && size === 'mini' ? 'mockup-code-xs' : ''} 
      ${size && size === 'tiny' ? 'mockup-code-xxs' : ''}
      ${rounded && typeof rounded === 'boolean' ? 'rounded-box' : ''}
      ${rounded && typeof rounded === 'string' ? `rounded-${rounded}` : ''}
      ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : 'bg-base-100'}
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
