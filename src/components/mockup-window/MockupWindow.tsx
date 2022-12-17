import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_MockupWindowProps } from './type'
import React from 'react'

const Ui_MockupWindow: any = forwardRef<HTMLDivElement, Ui_MockupWindowProps>(
  ({ className, children, style, bgColor, border, shadow, rounded, size, ...rest }, ref) => {
    return (
      <div
        className={`
      mockup-window${' '} 
      ${(className as string) || ''} 
      ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
      ${border ? `border border-${border}` : ''}
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
        {children}
      </div>
    )
  }
)

export default Ui_MockupWindow
