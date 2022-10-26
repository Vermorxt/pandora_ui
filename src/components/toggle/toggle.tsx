import { forwardRef, useEffect, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_ToggleProps } from './type'
import React from 'react'

const Ui_Toggle: any = forwardRef<HTMLDivElement, Ui_ToggleProps>(
  ({ onChange, className, name, style, checked, disabled, label, indeterminate, labelPosition, ...rest }, ref) => {
    const refElem = useRef<HTMLInputElement>(null) || ref

    const { large, medium, small, tiny } = rest

    const withoutPrefix_toggle = ['disabled']
    const convertAttributeToClassName_toggle = [
      ['large', 'medium', 'small', 'tiny'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_toggle,
      withoutPrefix: withoutPrefix_toggle,
      addPrefix: 'toggle',
    })

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
      toggle${' '} ${classAttributes} 
      ${(className as string) || ''}
      `}
        {...{ onChange, name }}
      />
    )

    if (label) {
      let textSize = 'text-xl'
      if (medium) textSize = 'text-base'
      if (small) textSize = 'text-sm'
      if (tiny) textSize = 'text-xs'

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
