import { forwardRef } from 'react'
import { generateClassNames } from '../_utils/css-class-generator'
import { Ui_StackProps } from './type'
import React from 'react'

const Ui_Stack: any = forwardRef<HTMLDivElement, Ui_StackProps>(
  ({ className, children, style, variant, ...rest }, ref) => {
    return (
      <div
        className={`
      stack${' '} 
        ${(className as string) || ''}
        ${variant ? `text-${variant}-content bg-${variant}` : ''} 
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
