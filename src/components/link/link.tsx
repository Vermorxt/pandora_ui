import { forwardRef } from 'react'
import { Ui_LinkProps } from './type'
import React from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'

const Ui_Link: any = forwardRef<HTMLAnchorElement, Ui_LinkProps>(
  (
    {
      className,
      children,
      style,
      hover,
      href,
      target,
      variant,
      size,
      disabled,
      outline,
      glass,
      active,
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={`
      link${' '} 
      ${(className as string) || ''} 
      ${variant ? `text-${variant}` : ''}
      ${glass && glass === true ? 'text-glass' : ''}
      ${disabled && disabled === true ? 'text-disabled' : ''}
      ${active && active === true ? 'text-active' : ''}
      ${outline && outline === true ? 'text-outline' : ''}
      ${size && size === 'large' ? 'text-lg' : ''}
      ${size && size === 'medium' ? 'text-md' : ''} 
      ${size && size === 'small' ? 'text-sm' : ''} 
      ${size && size === 'mini' ? 'text-xs' : ''} 
      ${size && size === 'tiny' ? 'text-xxs' : ''}
      ${hover ? `link-hover` : ''}   
      `}
        style={style}
        href={href}
        onClick={onClick}
        target={target}
      >
        {children}
      </a>
    )
  }
)

export default Ui_Link
