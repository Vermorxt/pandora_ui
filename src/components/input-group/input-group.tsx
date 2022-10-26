import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_InputGroupProps } from './type'
import React from 'react'

const Ui_InputGroup = forwardRef<HTMLLabelElement, Ui_InputGroupProps>(
  ({ onClick, className, name, children, type, vertical, style, htmlFor, ...rest }: Ui_InputGroupProps, ref) => {
    const withoutPrefix_inputGroup = [] as string[]
    const convertAttributeToClassName_inputGroup = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_inputGroup,
      withoutPrefix: withoutPrefix_inputGroup,
      addPrefix: 'input-group',
    })

    return (
      <label
        {...{ onClick, name }}
        className={`
      input-group${' '} 
      ${classAttributes}
      ${(className as string) || ''}
      ${vertical ? `input-group-vertical` : ''}
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
