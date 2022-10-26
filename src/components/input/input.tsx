import { FC, useEffect, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_InputProps } from './type'
import React from 'react'

export const withoutPrefix_input = ['disabled']
export const convertAttributeToClassName_input = [
  ['large', 'medium', 'small', 'tiny'], // NOTE: attributes to convert
  ['lg', 'md', 'sm', 'xs'], // NOTE: attributes translated based on attributes above
]
export const Ui_Input: FC<Ui_InputProps> = ({
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
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null)

  const { large, medium, small, tiny, mini } = rest

  const classAttributes = getClassNamesFromAttributes({
    names: rest,
    convert: convertAttributeToClassName_input,
    withoutPrefix: withoutPrefix_input,
    addPrefix: 'input',
  })

  useEffect(() => {
    if (ref?.current && indeterminate) {
      ref.current.indeterminate = true
    }
  }, [])

  let textSize = 'text-base'
  if (large) textSize = 'text-base'
  if (medium) textSize = 'text-md'
  if (small) textSize = 'text-sm'
  if (tiny) textSize = 'text-xs'
  if (mini) textSize = 'text-xxs'

  const InputElement = (
    <input
      ref={ref}
      disabled={disabled ? true : false}
      type={type || 'text'}
      value={value}
      placeholder={placeholder}
      style={style}
      className={`
      input${' '} ${classAttributes} 
      ${(className as string) || ''}
      `}
      {...{ onChange, name }}
    />
  )

  return (
    <>
      {label && (
        <label className="label">
          <span className={`label-text ${textSize}`}>{label}</span>
        </label>
      )}
      {InputElement}
      {altLabel && <span className={`label-text-alt text-xs pt-1 pl-1`}>{altLabel}</span>}
    </>
  )
}

export default Ui_Input
