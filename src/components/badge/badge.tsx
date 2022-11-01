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
      variant,
      loading,
      wide,
      full,
      large,
      medium,
      small,
      mini,
      tiny,
      disabled,
      noAnimation,
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
        ${outline ? 'badge-outline' : ''}
        ${loading ? 'loading' : ''}
        ${wide ? 'badge-wide' : ''}
        ${disabled ? 'badge-disabled' : ''}
        ${medium ? 'badge-md' : ''}
        ${small ? 'badge-sm' : ''}
        ${tiny ? 'badge-xs' : ''}
        ${large ? 'badge-lg' : ''}
        ${mini ? 'badge-xxs' : ''}
        ${noAnimation ? 'no-animation' : ''}
        ${full ? 'badge-block' : ''} ${(className as string) || ''}`}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Badge
