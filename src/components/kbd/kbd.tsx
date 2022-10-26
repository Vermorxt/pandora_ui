import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_KbdProps } from './type'
import React from 'react'

const Ui_Kbd = forwardRef<HTMLDivElement, Ui_KbdProps>(
  ({ onClick, className, name, children, style, ...rest }: Ui_KbdProps, ref) => {
    const withoutPrefix_kbd = [] as any[]

    const convertAttributeToClassName_kbd = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]
    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_kbd,
      withoutPrefix: withoutPrefix_kbd,
      addPrefix: 'kbd',
    })

    return (
      <kbd
        {...{ onClick, name }}
        className={`kbd${' '} ${`${classAttributes} ${(className as string) || ''}`}`}
        style={style}
        ref={ref}
      >
        {children}
      </kbd>
    )
  }
)

export default Ui_Kbd
