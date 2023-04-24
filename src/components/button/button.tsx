import React from 'react'
import { forwardRef } from 'react'
import { Ui_ButtonProps } from './type'

const Ui_Button = forwardRef<HTMLButtonElement, Ui_ButtonProps>(
  (
    {
      onClick,
      variant,
      className,
      name,
      children,
      tooltip,
      type,
      style,
      loading,
      size,
      disabled,
      noAnimation,
      allowFullScreen,
      outline,
      active,
      ...rest
    }: Ui_ButtonProps,
    ref
  ) => {
    return (
      <button
        type={type || 'button'}
        {...{ onClick, name }}
        className={`
        btn${' '}
      ${variant ? `btn-${variant}` : ''}
      ${size && size === 'large' ? 'btn-lg' : ''} 
      ${size && size === 'medium' ? 'btn-md' : ''} 
      ${size && size === 'small' ? 'btn-sm' : ''} 
      ${size && size === 'mini' ? 'btn-xs' : ''} 
      ${size && size === 'tiny' ? 'btn-xxs' : ''} 
      ${size && size === 'block' ? 'btn-block' : ''} 
      ${size && size === 'full' ? 'btn-block' : ''} 
      ${size && size === 'wide' ? 'btn-wide' : ''} 
      ${loading && loading === true ? 'loading' : ''}
      ${outline && outline === true ? 'btn-outline' : ''}
      ${active && active === true ? 'btn-active' : ''}
      ${disabled ? 'btn-disabled overflow-hidden' : ''}
      ${noAnimation ? 'no-animation' : ''}
      ${`${(className as string) || ''}`}
        `}
        style={style}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default Ui_Button
