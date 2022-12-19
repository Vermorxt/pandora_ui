import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_InputGroupProps } from './type'
import React from 'react'

const Ui_InputGroup = forwardRef<HTMLLabelElement, Ui_InputGroupProps>(
  ({ onClick, className, name, children, type, vertical, style, htmlFor, size, ...rest }: Ui_InputGroupProps, ref) => {
    return (
      <label
        {...{ onClick, name }}
        className={`
      input-group${' '} 
      ${(className as string) || ''}
      ${vertical ? `input-group-vertical` : ''}
      ${size && size === 'large' ? 'input-group-lg' : ''} 
      ${size && size === 'medium' ? 'input-group-md' : ''} 
      ${size && size === 'small' ? 'input-group-sm' : ''} 
      ${size && size === 'mini' ? 'input-group-xs' : ''} 
      ${size && size === 'tiny' ? 'input-group-xxs' : ''}
      `}
        style={style}
        ref={ref}
      >
        {children}
      </label>
    )
  }
)

export default Ui_InputGroup
