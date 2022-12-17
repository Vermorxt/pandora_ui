import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_RatingProps } from './type'
import React from 'react'
import { Helper } from '@vermorxt/pandora_utils'

const Ui_Rating: any = forwardRef<HTMLDivElement, Ui_RatingProps>(
  (
    {
      onChange,
      className,
      name,
      style,
      color,
      halfSymbol,
      shape,
      disabled,
      defaultCheckedValue,
      variant,
      size,
      ...rest
    },
    ref
  ) => {
    let usedShape = shape
    if (!usedShape || usedShape === 'star') usedShape = 'star-2'

    if (halfSymbol) {
      const classNameStar1 = `mask mask-${usedShape} mask-half-1 ${color ? `bg-${color}-400` : ''}`
      const classNameStar2 = `mask mask-${usedShape} mask-half-2 mr-1 ${color ? `bg-${color}-400` : ''}`
      return (
        <>
          <div
            className={`
            rating rating-lg rating-half
            $
            ${(className as string) || ''}
            ${size && size === 'large' ? 'btn-lg' : ''} 
            ${size && size === 'medium' ? 'btn-md' : ''} 
            ${size && size === 'small' ? 'btn-sm' : ''} 
            ${size && size === 'mini' ? 'btn-xs' : ''} 
            ${size && size === 'tiny' ? 'btn-xxs' : ''} 
            `}
            style={style}
          >
            <input
              type="radio"
              name={name}
              className={`rating-hidden ${variant ? `bg-${variant}` : ''}`}
              defaultChecked={defaultCheckedValue === 0}
              onChange={onChange ? () => onChange({ value: 0 }) : () => null}
            />
            {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(inputIndex => (
              <input
                key={inputIndex}
                type="radio"
                name={name}
                disabled={disabled}
                className={`${Helper.isFloat(inputIndex) ? classNameStar1 : classNameStar2} 
                ${variant ? `bg-${variant}` : ''}
                `}
                defaultChecked={defaultCheckedValue === inputIndex}
                onChange={onChange ? () => onChange({ value: inputIndex }) : () => null}
              />
            ))}
          </div>
        </>
      )
    }

    const classNameStar = `mask mask-${usedShape} ${color ? `bg-${color}-400` : ''}`

    return (
      <>
        <div className={`rating gap-1 ${`${(className as string) || ''}`} `} style={style}>
          {[1, 2, 3, 4, 5].map(inputIndex => (
            <input
              key={inputIndex}
              type="radio"
              name={name}
              disabled={disabled}
              className={`${classNameStar} ${variant ? `bg-${variant}` : ''}`}
              defaultChecked={defaultCheckedValue === inputIndex}
              onChange={onChange ? () => onChange({ value: inputIndex }) : () => null}
            />
          ))}
        </div>
      </>
    )
  }
)

export default Ui_Rating
