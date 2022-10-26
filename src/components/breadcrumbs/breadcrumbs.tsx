import React, { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_BreadcrumbsProps } from './type'

const Ui_Breadcrumbs = forwardRef<HTMLDivElement, Ui_BreadcrumbsProps>(
  (
    {
      className,
      children,
      style,

      ...rest
    }: Ui_BreadcrumbsProps,
    ref
  ) => {
    const withoutPrefix_badge = ['loading', 'noAnimation']
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
      <div
        className={`
      breadcrumbs${' '} 
      ${(className as string) || ''} 
      ${classAttributes} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Breadcrumbs
