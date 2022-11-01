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
      wide,
      block,
      full,
      square,
      large,
      medium,
      small,
      tiny,
      circle,
      disabled,
      noAnimation,
      allowFullScreen,

      outline,
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
        ${outline ? 'btn-outline' : ''}
        ${loading ? 'loading' : ''}
        ${wide ? 'btn-wide' : ''}
        ${square ? 'btn-square' : ''}
        ${circle ? 'btn-circle' : ''}
        ${disabled ? 'btn-disabled' : ''}
        ${medium ? 'btn-md' : ''}
        ${small ? 'btn-sm' : ''}
        ${tiny ? 'btn-xs' : ''}
        ${large ? 'btn-lg' : ''}
        ${noAnimation ? 'no-animation' : ''}
        ${block || full ? 'btn-block' : ''}
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
