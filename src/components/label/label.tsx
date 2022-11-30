import { forwardRef, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_LabelProps } from './type'
import React from 'react'

export const withoutPrefix_label = ['disabled']

const Ui_Label: any = forwardRef<HTMLDivElement, Ui_LabelProps>(
  ({ onClick, children, className, name, htmlFor, style, size, as, disabled, variant, ...rest }, ref) => {
    const refElem = useRef<HTMLLabelElement>(null) || ref

    let asElementType = 'label'

    if (as === 'button') {
      asElementType = 'btn'
    }

    return (
      <label
        ref={refElem}
        style={style}
        htmlFor={htmlFor}
        className={`
        ${disabled && disabled === true ? 'disabled' : ''}
        ${size && size === 'large' ? 'text-lg' : ''}
        ${size && size === 'medium' ? 'text-md' : ''} 
        ${size && size === 'small' ? 'text-sm' : ''} 
        ${size && size === 'mini' ? 'text-xs' : ''} 
        ${size && size === 'tiny' ? 'text-xxs' : ''}
        ${as && as === 'button' ? 'label-btn' : ''}
        ${variant ? `text-${variant}` : ''}
      ${asElementType}
      ${(className as string) || ''}
      `}
        {...{ onClick, name }}
      >
        {children}
      </label>
    )
  }
)

export default Ui_Label
