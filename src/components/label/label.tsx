import { forwardRef, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_LabelProps } from './type'
import React from 'react'

export const withoutPrefix_label = ['disabled']
export const convertAttributeToClassName_label = [
  ['large', 'medium', 'small', 'tiny'], // NOTE: attributes to convert
  ['lg', 'md', 'sm', 'xs'], // NOTE: attributes translated based on attributes above
]

const Ui_Label: any = forwardRef<HTMLDivElement, Ui_LabelProps>(
  ({ onClick, children, className, name, htmlFor, style, as, ...rest }, ref) => {
    const refElem = useRef<HTMLLabelElement>(null) || ref

    const { large, medium, small, tiny } = rest

    let asElementType = 'label'

    if (as === 'button') {
      asElementType = 'btn'
    }

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_label,
      withoutPrefix: withoutPrefix_label,
      addPrefix: asElementType,
    })

    let textSize = 'text-xl'
    if (large) textSize = 'text-xl'
    if (medium) textSize = 'text-base'
    if (small) textSize = 'text-sm'
    if (tiny) textSize = 'text-xs'

    return (
      <label
        ref={refElem}
        style={style}
        htmlFor={htmlFor}
        className={`
      ${classAttributes}
      ${textSize}
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
