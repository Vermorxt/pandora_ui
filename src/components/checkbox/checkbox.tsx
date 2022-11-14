import { forwardRef, useEffect, useRef } from 'react'
import { Ui_CheckboxProps } from './type'
import React from 'react'

const Ui_Checkbox = forwardRef<HTMLInputElement, Ui_CheckboxProps>(
  (
    {
      onChange,
      className,
      name,
      style,
      checked,
      disabled,
      label,
      indeterminate,
      labelPosition,
      ...rest
    }: Ui_CheckboxProps,
    ref
  ) => {
    const refElem = useRef<HTMLInputElement>(null) || ref

    const { variant, size } = rest

    useEffect(() => {
      if (refElem?.current && indeterminate) {
        refElem.current.indeterminate = true
      }
    }, [])

    const CheckboxElement = (
      <input
        ref={ref}
        disabled={disabled ? true : false}
        type="checkbox"
        checked={checked}
        style={style}
        className={`
        checkbox${' '}
          ${size && size === 'large' ? 'checkbox-lg' : ''}
          ${size && size === 'medium' ? 'checkbox-md' : ''}
          ${size && size === 'small' ? 'checkbox-sm' : ''}
          ${size && size === 'mini' ? 'checkbox-xs' : ''}
          ${size && size === 'tiny' ? 'checkbox-xxs' : ''}
          ${variant ? `checkbox-${variant}` : ''}
          ${(className as string) || ''}
      `}
        {...{ onChange, name }}
      />
    )

    if (label) {
      if (labelPosition === 'right') {
        return (
          <label className="cursor-pointer label" style={{ ...style, width: 'fit-content' }}>
            {CheckboxElement}
            <span
              className={`pl-3 
                ${size && size === 'large' ? 'text-xl' : ''}
                ${size && size === 'medium' ? 'text-base' : ''}
                ${size && size === 'small' ? 'text-sm' : ''}
                ${size && size === 'mini' ? 'text-xs' : ''}
                ${size && size === 'tiny' ? 'text-xxs' : ''}
                ${variant ? `text-${variant}` : ''}
            `}
            >
              {label}
            </span>
          </label>
        )
      } else {
        return (
          <label className="cursor-pointer label" style={{ ...style, width: 'fit-content' }}>
            <span
              className={`pr-3 
                ${size && size === 'large' ? 'text-xl' : ''}
                ${size && size === 'medium' ? 'text-base' : ''}
                ${size && size === 'small' ? 'text-sm' : ''}
                ${size && size === 'mini' ? 'text-xs' : ''}
                ${size && size === 'tiny' ? 'text-xxs' : ''}
                ${variant ? `text-${variant}` : ''}
              `}
            >
              {label}
            </span>
            {CheckboxElement}
          </label>
        )
      }
    }

    return CheckboxElement
  }
)

export default Ui_Checkbox
