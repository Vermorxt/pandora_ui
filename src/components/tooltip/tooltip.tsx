import { forwardRef } from 'react'
import { Ui_TooltipProps } from './type'
import React from 'react'

const Ui_Tooltip: any = forwardRef<HTMLDivElement, Ui_TooltipProps>(
  ({ onClick, className, name, children, style, content, position, open, size, variant, ...rest }, ref) => {
    return (
      <div
        {...{ onClick, name }}
        className={`tooltip${' '} ${` ${(className as string) || ''}`} 
      ${position ? `tooltip-${position}` : ''}
      ${open ? `tooltip-open` : ''}
      ${variant ? `tooltip-${variant}` : ''}
      ${size && size === 'large' ? 'tooltip-lg' : ''} 
      ${size && size === 'medium' ? 'tooltip-md' : ''} 
      ${size && size === 'small' ? 'tooltip-sm' : ''} 
      ${size && size === 'mini' ? 'tooltip-xs' : ''} 
      ${size && size === 'tiny' ? 'tooltip-xxs' : ''} 
      `}
        data-tip={content}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Tooltip
