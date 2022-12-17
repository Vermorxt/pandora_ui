import { forwardRef, useEffect, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_RadioProps } from './type'
import React from 'react'

const Ui_Radio: any = forwardRef<HTMLDivElement, Ui_RadioProps>(
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
      dataTitle,
      variant,
      size,
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

    let usedRadio = 'radio'

    if (className?.includes('btn')) {
      className.replace('radio', '')
      usedRadio = ''
    }

    const RadioElement = (
      <input
        data-title={dataTitle || null}
        ref={refElem}
        disabled={disabled ? true : false}
        type="radio"
        checked={checked}
        style={style}
        className={`
      ${usedRadio}
      ${variant ? `radio-${variant}` : ''}
      ${disabled && disabled === true ? `disabled` : ''}
      ${size && size === 'large' ? 'radio-lg' : ''} 
      ${size && size === 'medium' ? 'radio-md' : ''} 
      ${size && size === 'small' ? 'radio-sm' : ''} 
      ${size && size === 'mini' ? 'radio-xs' : ''} 
      ${size && size === 'tiny' ? 'radio-xxs' : ''} 
      ${(className as string) || ''}
      `}
        {...{ onChange, name }}
      />
    )

    if (label) {
      let textSize = 'text-xl'
      if (size === 'large') textSize = 'text-xl'
      if (size === 'medium') textSize = 'text-base'
      if (size === 'small') textSize = 'text-sm'
      if (size === 'mini') textSize = 'text-xs'
      if (size === 'tiny') textSize = 'text-xxs'

      if (labelPosition === 'right') {
        return (
          <label className="cursor-pointer label">
            {RadioElement}
            <span className={`label-text pl-3 ${textSize}`}>{label}</span>
          </label>
        )
      } else {
        return (
          <label className="cursor-pointer label">
            <span className={`label-text pr-3 ${textSize}`}>{label}</span>
            {RadioElement}
          </label>
        )
      }
    }

    return RadioElement
  }
)

export default Ui_Radio
