import { forwardRef } from 'react'
import { Ui_GridProps } from './type'
import React from 'react'

const Ui_Grid = forwardRef<HTMLDivElement, Ui_GridProps>((props: Ui_GridProps, ref?) => {
  const { children, className, style } = props
  return (
    <div className={`${className ? className : ''} grid grid-cols-4 gap-4`} style={style} ref={ref}>
      {children}
    </div>
  )
})

export default Ui_Grid
