import { forwardRef } from 'react'
import { Ui_BadgeProps } from './type'
import React from 'react'

const Ui_Badge = forwardRef<HTMLDivElement, Ui_BadgeProps>(
  (
    {
      onClick,
      className,
      name,
      children,
      style,
      size,
      variant,
      disabled,
      allowFullScreen,

      outline,
      ...rest
    }: Ui_BadgeProps,
    ref
  ) => {
    return (
      <div
        {...{ onClick, name }}
        className={`badge${' '}  
        ${variant ? `badge-${variant}` : ''}
        ${outline && outline === true ? 'badge-outline' : ''}
        ${disabled && disabled === true ? 'badge-disabled' : ''}
        ${size && size === 'large' ? 'badge-lg' : ''} 
        ${size && size === 'medium' ? 'badge-md' : ''} 
        ${size && size === 'small' ? 'badge-sm' : ''} 
        ${size && size === 'mini' ? 'badge-xs' : ''} 
        ${size && size === 'tiny' ? 'badge-xxs' : ''} 
        ${(className as string) || ''}`}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Badge
