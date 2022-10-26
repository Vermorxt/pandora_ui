import { forwardRef } from 'react'
import { Ui_LinkProps } from './type'
import React from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'

const Ui_Link: any = forwardRef<HTMLAnchorElement, Ui_LinkProps>(
  ({ className, children, style, hover, href, target, onClick, ...rest }, ref) => {
    const withoutPrefix_badge = [] as string[]
    const convertAttributeToClassName_badge = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_badge,
      withoutPrefix: withoutPrefix_badge,
      addPrefix: 'text',
    })

    return (
      <a
        ref={ref}
        className={`
      link${' '} 
      ${(className as string) || ''} 
      ${classAttributes} 
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
