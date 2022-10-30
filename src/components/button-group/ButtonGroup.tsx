import { FC, forwardRef } from 'react'
import { Ui_ButtonGroupProps } from './type'
import React from 'react'

const Ui_ButtonGroup: FC<any & Ui_ButtonGroupProps> = forwardRef<HTMLDivElement, Ui_ButtonGroupProps>(
  ({ onClick, className, name, children, style, ...rest }: Ui_ButtonGroupProps, ref) => {
    return (
      <div
        className={`
          btn-group${' '} 
          ${(className as string) || ''} 
        `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_ButtonGroup
