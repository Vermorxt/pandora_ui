import { forwardRef } from 'react'
import { Ui_KbdProps } from './type'
import React from 'react'

const Ui_Kbd = forwardRef<HTMLDivElement, Ui_KbdProps>(
  ({ onClick, className, name, children, style, variant, size, ...rest }: Ui_KbdProps, ref) => {
    return (
      <kbd
        {...{ onClick, name }}
        className={`kbd${' '}
        ${variant ? `input-${variant}` : ''}       
        ${size && size === 'large' ? 'kbd-lg' : ''}
        ${size && size === 'medium' ? 'kbd-md' : ''} 
        ${size && size === 'small' ? 'kbd-sm' : ''} 
        ${size && size === 'mini' ? 'kbd-xs' : ''} 
        ${size && size === 'tiny' ? 'kbd-xxs' : ''} 
        ${(className as string) || ''}`}
        style={style}
        ref={ref}
      >
        {children}
      </kbd>
    )
  }
)

export default Ui_Kbd
