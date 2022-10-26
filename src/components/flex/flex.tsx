import { forwardRef } from 'react'
import { Ui_FlexProps } from './type'
import React from 'react'

export const Ui_Flex = forwardRef<HTMLDivElement, Ui_FlexProps>(
  ({ children, className, style, ...rest }: Ui_FlexProps, ref?) => {
    return (
      <div
        {...rest}
        className={`
        ui_flex 
          ${className ? className : ''}
          `}
        ref={ref}
        style={{ ...style, display: 'flex' }}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Flex
