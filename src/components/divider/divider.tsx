import { forwardRef } from 'react'
import { Ui_DividerProps } from './type'
import React from 'react'

const Ui_Divider = forwardRef<HTMLDivElement, Ui_DividerProps>(
  ({ className, name, children, style, horizontal, ...rest }: Ui_DividerProps, ref) => {
    return (
      <div
        className={`
      divider${' '}
      ${horizontal ? 'divider-horizontal' : ''} 
      ${className || ''} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Divider
