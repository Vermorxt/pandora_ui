import { FC, forwardRef } from 'react'
import { convertObjectToArray, getClassNamesFromAttributes, getUsedAttributes } from '../_utils/css-class-generator'
import { Ui_IndicatorProps } from './type'
import React from 'react'

const Ui_Indicator: any = forwardRef<HTMLDivElement, Ui_IndicatorProps & { Item: FC<Ui_IndicatorProps> }>(
  ({ children, className, id, shadow, bgColor, rounded, style }, ref) => {
    return (
      <div
        className={`
            indicator ${className ? className : ''} 
            ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
            ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'lg' : rounded}` : ''}
            `}
        id={id}
        ref={ref}
        style={style}
      >
        <div
          className={`
            ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'lg' : rounded}` : ''}
            ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
            `}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </div>
      </div>
    )
  }
)

const Item: FC = forwardRef<HTMLDivElement, Ui_IndicatorProps>(
  ({ children, className, badge, color, style, ...rest }, ref) => {
    const { start, end, middle, top, bottom, center } = rest

    return (
      <div
        ref={ref}
        className={`indicator-item
      ${className ? className : ''}
      ${badge ? `badge ${color ? `badge-${color}` : ''}` : ''}
      ${start && start === true ? `indicator-${'start'}` : ''}
      ${end && end === true ? `indicator-${'end'}` : ''}
      ${center && center === true ? `indicator-${'center'}` : ''}
      ${top && top === true ? `indicator-${'top'}` : ''}
      ${bottom && bottom === true ? `indicator-${'bottom'}` : ''}
      ${middle && middle === true ? `indicator-${'middle'}` : ''}
      
      `}
        style={{ ...style, width: 'max-content' }}
      >
        {children}
      </div>
    )
  }
)

Ui_Indicator.Item = Item

export default Ui_Indicator
