import { FC, forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_StepsProps } from './type'
import React from 'react'

const Ui_Steps: any = forwardRef<HTMLUListElement, Ui_StepsProps & { Step: FC<Ui_StepsProps> }>(
  ({ children, className, id, shadow, rounded, vertical, itemsCenter, bgColor, style, ...rest }, ref) => {
    return (
      <ul
        className={`
          steps
          ${className ? className : ''}
          ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
          ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : ''}
          ${vertical ? `steps-vertical` : ''}
          ${itemsCenter ? `items-center` : ''}
        `}
        id={id}
        style={style}
        ref={ref}
      >
        {children}
      </ul>
    )
  }
)

export const Step: any = forwardRef<HTMLLIElement, Ui_StepsProps>(
  ({ children, className, style, dataContent, ...rest }, ref) => {
    const convertAttributeToClassName_step = [] as string[][]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_step,
      withoutPrefix: [],
      addPrefix: 'step',
    })

    return (
      <li
        className={`step 
            ${classAttributes}
            ${className ? className : ''}
          `}
        style={style}
        ref={ref}
        data-content={dataContent}
      >
        {children}
      </li>
    )
  }
)

Ui_Steps.Step = Step

export default Ui_Steps
