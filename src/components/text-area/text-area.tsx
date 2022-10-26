import { forwardRef, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_TextAreaProps } from './type'
import React from 'react'

const Ui_TextArea: any = forwardRef<HTMLDivElement, Ui_TextAreaProps>(
  (
    {
      onChange,
      className,
      name,
      style,
      value,
      type,
      disabled,
      label,
      altLabel,
      placeholder,
      indeterminate,
      labelPosition,
      ...rest
    },
    ref
  ) => {
    const refElem = useRef<HTMLTextAreaElement>(null) || ref

    const { large, medium, small, tiny } = rest

    const withoutPrefix_textarea = ['disabled']
    const convertAttributeToClassName_textarea = [
      ['large', 'medium', 'small', 'tiny'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs'], // NOTE: attributes translated based on attributes above
    ]
    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_textarea,
      withoutPrefix: withoutPrefix_textarea,
      addPrefix: 'textarea',
    })

    let textSize = 'text-base'
    if (medium) textSize = 'text-md'
    if (small) textSize = 'text-sm'
    if (tiny) textSize = 'text-xs'

    const TextAreaElement = (
      <textarea
        ref={refElem}
        disabled={disabled ? true : false}
        value={value}
        placeholder={placeholder}
        style={style}
        className={`
      textarea${' '} ${classAttributes} 
      ${(className as string) || ''}
      `}
        {...{ onChange, name }}
      >
        {value}
      </textarea>
    )

    return (
      <>
        {label && (
          <label className="label">
            <span className={`label-text ${textSize}`}>{label}</span>
          </label>
        )}
        {TextAreaElement}
        {altLabel && <span className={`label-text-alt text-xs pt-1 pl-1`}>{altLabel}</span>}
      </>
    )
  }
)

export default Ui_TextArea
