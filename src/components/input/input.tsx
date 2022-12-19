import { FC, useEffect, useRef } from 'react'
import { Ui_InputProps } from './type'
import React from 'react'

export const Ui_Input: FC<Ui_InputProps> = ({
  onChange,
  className,
  name,
  style,
  value,
  type,
  disabled,
  label,
  variant,
  altLabel,
  size,
  placeholder,
  indeterminate,
  loading,
  checked,
  bordered,
  labelPosition,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref?.current && indeterminate) {
      ref.current.indeterminate = true
    }
  }, [])

  const InputElement = (
    <input
      ref={ref}
      disabled={disabled ? true : false}
      type={type || 'text'}
      value={value}
      placeholder={placeholder}
      style={style}
      className={`
      input${' '} 
        ${(className as string) || ''}
        ${variant ? `input-${variant}` : ''}
        ${disabled && disabled === true ? `input-${'disabled'}` : ''}
        ${bordered && bordered === true ? `input-${'bordered'}` : ''}
        ${checked && checked === true ? `input-${'checked'}` : ''}
        ${loading && loading === true ? `input-${'loading'}` : ''}
        ${indeterminate && indeterminate === true ? `input-${'indeterminate'}` : ''}
        ${size && size === 'large' ? 'input-lg' : ''} 
        ${size && size === 'medium' ? 'input-md' : ''} 
        ${size && size === 'small' ? 'input-sm' : ''} 
        ${size && size === 'mini' ? 'input-xs' : ''} 
        ${size && size === 'tiny' ? 'input-xxs' : ''}
        ${
          size !== 'large' && size !== 'medium' && size !== 'small' && size !== 'mini' && size !== 'tiny'
            ? 'input-base'
            : ''
        } 
      `}
      {...{ onChange, name }}
    />
  )

  return (
    <>
      {label && (
        <label className="label">
          <span
            className={`label-text 
              ${size && size === 'large' ? 'text-base' : ''} 
              ${size && size === 'medium' ? 'text-md' : ''} 
              ${size && size === 'small' ? 'text-sm' : ''} 
              ${size && size === 'mini' ? 'text-xs' : ''} 
              ${size && size === 'tiny' ? 'text-xxs' : ''} 
              ${
                size !== 'large' && size !== 'medium' && size !== 'small' && size !== 'mini' && size !== 'tiny'
                  ? 'text-base'
                  : ''
              } 
          `}
          >
            {label}
          </span>
        </label>
      )}
      {InputElement}
      {altLabel && <span className={`label-text-alt text-xs pt-0 pl-1`}>{altLabel}</span>}
    </>
  )
}

export default Ui_Input
