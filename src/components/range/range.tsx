import { forwardRef, useEffect, useRef } from 'react'
import { Ui_RangeProps } from './type'
import React from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'

export const withoutPrefix_range = ['disabled']
export const convertAttributeToClassName_range = [
  ['large', 'medium', 'small', 'tiny'], // NOTE: attributes to convert
  ['lg', 'md', 'sm', 'xs'], // NOTE: attributes translated based on attributes above
]

const Ui_Range: any = forwardRef<HTMLDivElement, Ui_RangeProps>(
  (
    {
      onChange,
      className,
      name,
      style,
      value,
      min,
      max,
      type,
      size,
      step,
      disabled,
      label,
      altLabel,
      placeholder,
      indeterminate,
      labelPosition,
      variant,
      hideStepLabel,
      onClick,
      onMouseDown,
      onMouseUp,
      onWheel,
      onTouchStart,
      onTouchEnd,
      onFocus,
      onBlur,
      onDoubleClick,
      ...rest
    },
    ref
  ) => {
    const refElem = useRef<HTMLInputElement>(null) || ref

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_range,
      withoutPrefix: withoutPrefix_range,
      addPrefix: 'range',
    })

    useEffect(() => {
      if (refElem?.current && indeterminate) {
        refElem.current.indeterminate = true
      }
    }, [])

    let textSize = 'text-base'
    if (size === 'medium') textSize = 'text-md'
    if (size === 'small') textSize = 'text-sm'
    if (size === 'mini') textSize = 'text-xs'

    const RangeElement = (
      <>
        <input
          ref={refElem}
          disabled={disabled ? true : false}
          type={'range'}
          value={value}
          step={step}
          min={min || '0'}
          max={max || '100'}
          placeholder={placeholder}
          style={style}
          className={`
      range${' '} 
      ${classAttributes}
      ${(className as string) || ''}
      ${variant ? `range-${variant}` : ''}
      ${size && size === 'large' ? 'range-lg' : ''} 
      ${size && size === 'medium' ? 'range-md' : ''} 
      ${size && size === 'small' ? 'range-sm' : ''} 
      ${size && size === 'mini' ? 'range-xs' : ''} 
      ${size && size === 'tiny' ? 'range-xxs' : ''}
      `}
          {...{
            onChange,
            name,
            onClick,
            onMouseDown,
            onMouseUp,
            onWheel,
            onTouchStart,
            onTouchEnd,
            onFocus,
            onBlur,
            onDoubleClick,
          }}
        />
        {step && !hideStepLabel && (
          <div className="w-full flex justify-between text-xs px-2">
            {Array.from(Array(100 / Number(step) + 1)).map((a, i) => (
              <span key={i}>|</span>
            ))}
          </div>
        )}
      </>
    )

    return (
      <>
        {label && (
          <label className="label">
            <span className={`label-text ${textSize}`}>{label}</span>
          </label>
        )}
        {RangeElement}
        {altLabel && <span className={`label-text-alt text-xs pt-1 pl-1`}>{altLabel}</span>}
      </>
    )
  }
)

export default Ui_Range
