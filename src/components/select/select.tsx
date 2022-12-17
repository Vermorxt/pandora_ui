import { forwardRef, ReactElement, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_SelectProps } from './type'
import React from 'react'

const Ui_Select: any = forwardRef<HTMLSelectElement, Ui_SelectProps>(
  (
    {
      onChange,
      children,
      className,
      name,
      style,
      disabled,
      label,
      altLabel,
      disabledOptions,
      optionLabel,
      options,
      defaultValue,
      variant,
      size,
      ...rest
    },
    ref
  ) => {
    const refElem = useRef<HTMLSelectElement>(null) || ref

    const selectOptions = [] as ReactElement[]

    if (options) {
      options.forEach((option, index) =>
        selectOptions.push(
          <option key={index} disabled={disabledOptions?.includes(index)}>
            {option}
          </option>
        )
      )
    }

    const SelectElement = (
      <select
        className={`
        select w-full ${' '}
        ${variant ? `select-${variant}` : ''}
        ${disabled ? `disabled` : ''}
        ${size && size === 'large' ? 'select-lg' : ''} 
        ${size && size === 'medium' ? 'select-md' : ''} 
        ${size && size === 'small' ? 'select-sm' : ''} 
        ${size && size === 'mini' ? 'select-xs' : ''} 
        ${size && size === 'tiny' ? 'select-xxs' : ''} 
        ${(className as string) || ''}
      `}
        style={style}
        ref={refElem}
        name={name}
        disabled={disabled}
        defaultValue={defaultValue ? defaultValue : null}
        onChange={onChange}
      >
        {optionLabel && <option disabled>{optionLabel}</option>}
        {selectOptions.length ? selectOptions : children}
      </select>
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
              ${size && size === 'tiny' ? 'text-xxs' : ''} `}
            >
              {label}
            </span>
          </label>
        )}
        {SelectElement}
        {altLabel && <span className={`label-text-alt text-xs pt-1 pl-1`}>{altLabel}</span>}
      </>
    )
  }
)

export default Ui_Select
