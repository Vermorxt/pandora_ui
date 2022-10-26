import { forwardRef } from 'react'
import { generateClassNames } from '../_utils/css-class-generator'
import { Ui_StackProps } from './type'
import React from 'react'

const Ui_Stack: any = forwardRef<HTMLDivElement, Ui_StackProps>(
  (
    {
      className,
      children,
      style,
      info,
      warning,
      success,
      error,
      primary,
      secondary,
      accent,
      ghost,
      link,
      neutral,
      ...rest
    },
    ref
  ) => {
    const colorClass = generateClassNames(
      {
        info,
        warning,
        success,
        error,
        primary,
        secondary,
        accent,
        ghost,
        link,
        neutral,
      },
      'bg'
    )

    return (
      <div
        className={`
      stack${' '} 
        ${(className as string) || ''}
        ${colorClass.classNames ? `${colorClass.classAttributesText}-content ${colorClass.classNames}` : ''} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Stack
