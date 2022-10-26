import { forwardRef } from 'react'
import { Ui_SwapProps } from './type'
import React from 'react'

const Ui_Swap: any = forwardRef<HTMLLabelElement, Ui_SwapProps>(
  ({ onClick, className, swapRotate, swapFlip, swapActive, swapOn, swapOff, style }, ref) => {
    return (
      <label
        style={style}
        ref={ref}
        className={`swap ${swapRotate ? 'swap-rotate' : ''} ${swapFlip ? 'swap-flip' : ''} ${
          className ? className : ''
        }`}
      >
        <input type="checkbox" defaultChecked={swapActive && swapActive === 'on'} aria-label="swap" />
        <div className={`swap-on ${swapActive && swapActive === 'on' ? 'swap-active' : ''}`} onClick={onClick}>
          {swapOn}
        </div>
        <div className={`swap-off ${swapActive && swapActive === 'off' ? 'swap-active' : ''}`} onClick={onClick}>
          {swapOff}
        </div>
      </label>
    )
  }
)
export default Ui_Swap
