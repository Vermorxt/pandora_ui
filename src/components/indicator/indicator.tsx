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
            ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
            ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
            `}
        id={id}
        ref={ref}
        style={style}
      >
        {children}
      </div>
    )
  }
)

const Item: FC = forwardRef<HTMLDivElement, Ui_IndicatorProps>(
  ({ children, className, badge, color, style, ...rest }, ref) => {
    const { start, end, middle, top, bottom, center } = rest

    const usedProps = getUsedAttributes(rest, { start, end, middle, top, bottom, center })
    const usedObj = convertObjectToArray(usedProps)

    const classAttributes = getClassNamesFromAttributes({
      names: usedObj,
      convert: [],
      withoutPrefix: [],
      addPrefix: 'indicator',
      defaultValue: '',
    })

    return (
      <div
        ref={ref}
        className={`indicator-item
      ${className ? className : ''}
      ${classAttributes}
      ${badge ? `badge ${color ? `badge-${color}` : ''}` : ''}
      
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
