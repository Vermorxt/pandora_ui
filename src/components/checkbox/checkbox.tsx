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

    const { large, medium, small, tiny, mini } = rest
    const { variant } = rest

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
        ${large ? 'checkbox-lg' : ''}
        ${medium ? 'checkbox-md' : ''}
        ${small ? 'checkbox-sm' : ''}
        ${tiny ? 'checkbox-xs' : ''}
        ${mini ? 'checkbox-xxs' : ''}
        ${variant ? `checkbox-${variant}` : ''}
      ${(className as string) || ''}
      `}
        {...{ onChange, name }}
      />
    )

    if (label) {
      if (labelPosition === 'right') {
        return (
          <label className="cursor-pointer label">
            {CheckboxElement}
            <span
              className={`label-text pl-3 
                ${large ? 'text-xl' : ''}
                ${medium ? 'text-base' : ''}
                ${small ? 'text-sm' : ''}
                ${tiny ? 'text-xs' : ''}
                ${mini ? 'text-xxs' : ''}
                ${variant ? `checkbox-${variant}` : ''}
            `}
            >
              {label}
            </span>
          </label>
        )
      } else {
        return (
          <label className="cursor-pointer label">
            <span
              className={`label-text pr-3 ${large ? 'text-xl' : ''}
                ${medium ? 'text-base' : ''}
                ${small ? 'text-sm' : ''}
                ${tiny ? 'text-xs' : ''}
                ${mini ? 'text-xxs' : ''}
                 ${variant ? `checkbox-${variant}` : ''}
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
