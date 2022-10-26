import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_TooltipProps } from './type'
import React from 'react'

const Ui_Tooltip: any = forwardRef<HTMLDivElement, Ui_TooltipProps>(
  ({ onClick, className, name, children, style, content, position, open, ...rest }, ref) => {
    const withoutPrefix_tooltip = [] as string[]
    const convertAttributeToClassName_tooltip = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]
    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_tooltip,
      withoutPrefix: withoutPrefix_tooltip,
      addPrefix: 'tooltip',
    })

    return (
      <div
        {...{ onClick, name }}
        className={`tooltip${' '} ${`${classAttributes} ${(className as string) || ''}`} 
      ${position ? `tooltip-${position}` : ''}
      ${open ? `tooltip-open` : ''}
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
