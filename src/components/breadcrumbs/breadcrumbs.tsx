import React, { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_BreadcrumbsProps } from './type'

const Ui_Breadcrumbs = forwardRef<HTMLDivElement, Ui_BreadcrumbsProps>(
  ({ className, children, style, size, variant, ...rest }: Ui_BreadcrumbsProps, ref) => {
    return (
      <div
        className={`
      breadcrumbs${' '} 
      ${(className as string) || ''}
      ${variant ? `text-${variant}` : ''} 
      ${size && size === 'large' ? 'text-lg' : ''} 
      ${size && size === 'medium' ? 'text-md' : ''} 
      ${size && size === 'small' ? 'text-sm' : ''} 
      ${size && size === 'mini' ? 'text-xs' : ''} 
      ${size && size === 'tiny' ? 'text-xxs' : ''} 
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
