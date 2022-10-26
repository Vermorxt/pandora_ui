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
      ...rest
    },
    ref
  ) => {
    const refElem = useRef<HTMLSelectElement>(null) || ref

    const { large, medium, small, tiny, mini } = rest

    const withoutPrefix_input = ['disabled']
    const convertAttributeToClassName_input = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_input,
      withoutPrefix: withoutPrefix_input,
      addPrefix: 'input',
    })

    let textSize = 'text-base'
    if (large) textSize = 'text-base'
    if (medium) textSize = 'text-md'
    if (small) textSize = 'text-sm'
    if (tiny) textSize = 'text-xs'
    if (mini) textSize = 'text-xxs'

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
      select w-full ${' '} ${classAttributes} 
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
            <span className={`label-text ${textSize}`}>{label}</span>
          </label>
        )}
        {SelectElement}
        {altLabel && <span className={`label-text-alt text-xs pt-1 pl-1`}>{altLabel}</span>}
      </>
    )
  }
)

export default Ui_Select
