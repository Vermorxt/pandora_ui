import { forwardRef } from 'react'
import { Ui_FlagProps } from './type'
import React from 'react'

const Ui_Flag = forwardRef<HTMLDivElement, Ui_FlagProps>(({ children, className, name, style, ...rest }, ref) => {
  return (
    <div
      className={`${className ? className : ''} fi fi-${name === 'en' ? 'gb' : name}`}
      {...rest}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  )
})

export default Ui_Flag
