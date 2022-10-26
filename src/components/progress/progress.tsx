import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_ProgressProps } from './type'
import React from 'react'

const Ui_Progress: any = forwardRef<HTMLProgressElement, Ui_ProgressProps>(
  ({ onClick, className, name, children, type, style, value, max, ...rest }, ref) => {
    const withoutPrefix_progress = ['loading']
    const convertAttributeToClassName_progress = [
      ['large', 'medium', 'small', 'tiny', 'mini', 'wide', 'full'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs', 'wide', 'block'], // NOTE: attributes translated based on attributes above
    ]
    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_progress,
      withoutPrefix: withoutPrefix_progress,
      addPrefix: 'progress',
    })

    return (
      <progress
        {...{ onClick, name }}
        className={`progress${' '} ${`${classAttributes} ${(className as string) || ''}`}`}
        style={style}
        value={value}
        ref={ref}
        max={max}
      >
        {children}
      </progress>
    )
  }
)

export default Ui_Progress
