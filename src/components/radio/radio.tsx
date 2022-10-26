import { forwardRef, useEffect, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_RadioProps } from './type'
import React from 'react'

const Ui_Radio: any = forwardRef<HTMLDivElement, Ui_RadioProps>(
  (
    { onChange, className, name, style, checked, disabled, label, indeterminate, labelPosition, dataTitle, ...rest },
    ref
  ) => {
    const withoutPrefix_radio = ['disabled']
    const convertAttributeToClassName_radio = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]

    const refElem = useRef<HTMLInputElement>(null) || ref

    const { large, medium, small, tiny, mini } = rest

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_radio,
      withoutPrefix: withoutPrefix_radio,
      addPrefix: 'radio',
    })

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
      ${usedRadio} ${classAttributes} 
      ${(className as string) || ''}
      `}
        {...{ onChange, name }}
      />
    )

    if (label) {
      let textSize = 'text-xl'
      if (large) textSize = 'text-xl'
      if (medium) textSize = 'text-base'
      if (small) textSize = 'text-sm'
      if (tiny) textSize = 'text-xs'
      if (mini) textSize = 'text-xxs'

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
