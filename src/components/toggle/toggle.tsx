import { forwardRef, useEffect, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_ToggleProps } from './type'
import React from 'react'

const Ui_Toggle: any = forwardRef<HTMLDivElement, Ui_ToggleProps>(
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
      size,
      variant,
      ...rest
    },
    ref
  ) => {
    const refElem = useRef<HTMLInputElement>(null) || ref

    useEffect(() => {
      if (refElem?.current && indeterminate) {
        refElem.current.indeterminate = true
      }
    }, [])

    const ToggleElement = (
      <input
        ref={refElem}
        disabled={disabled ? true : false}
        type="checkbox"
        checked={checked}
        style={style}
        className={`
      toggle${' '} 
      ${(className as string) || ''}
      ${disabled && disabled === true ? 'disabled' : ''}
      ${variant ? `toggle-${variant}` : ''}
      ${size && size === 'large' ? 'toggle-lg' : ''} 
      ${size && size === 'medium' ? 'toggle-md' : ''} 
      ${size && size === 'small' ? 'toggle-sm' : ''} 
      ${size && size === 'mini' ? 'toggle-xs' : ''} 
      ${size && size === 'tiny' ? 'toggle-xxs' : ''} 
      `}
        {...{ onChange, name }}
      />
    )

    if (label) {
      let textSize = 'text-xl'
      if (size === 'medium') textSize = 'text-base'
      if (size === 'small') textSize = 'text-sm'
      if (size === 'tiny') textSize = 'text-xs'

      if (labelPosition === 'right') {
        return (
          <label className="cursor-pointer label">
            {ToggleElement}
            <span className={`label-text pl-3 ${textSize}`}>{label}</span>
          </label>
        )
      } else {
        return (
          <label className="cursor-pointer label">
            <span className={`label-text pr-3 ${textSize}`}>{label}</span>
            {ToggleElement}
          </label>
        )
      }
    }

    return ToggleElement
  }
)

export default Ui_Toggle
