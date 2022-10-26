import { forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_RatingProps } from './type'
import React from 'react'
import Ui_Functions from '../../_utils'

const Ui_Rating: any = forwardRef<HTMLDivElement, Ui_RatingProps>(
  ({ onChange, className, name, style, color, halfSymbol, shape, disabled, defaultCheckedValue, ...rest }, ref) => {
    const withoutPrefix_rating = ['loading', 'noAnimation']
    const convertAttributeToClassName_rating = [
      ['large', 'medium', 'small', 'tiny', 'wide', 'full'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'wide', 'block'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_rating,
      withoutPrefix: withoutPrefix_rating,
      addPrefix: 'rating',
    })

    let usedShape = shape
    if (!usedShape || usedShape === 'star') usedShape = 'star-2'

    if (halfSymbol) {
      const classNameStar1 = `mask mask-${usedShape} mask-half-1 ${color ? `bg-${color}-400` : ''}`
      const classNameStar2 = `mask mask-${usedShape} mask-half-2 mr-1 ${color ? `bg-${color}-400` : ''}`
      return (
        <>
          <div
            className={`rating rating-lg rating-half ${`${classAttributes} ${(className as string) || ''}`} `}
            style={style}
          >
            <input
              type="radio"
              name={name}
              className="rating-hidden"
              defaultChecked={defaultCheckedValue === 0}
              onChange={onChange ? () => onChange({ value: 0 }) : () => null}
            />
            {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(inputIndex => (
              <input
                key={inputIndex}
                type="radio"
                name={name}
                disabled={disabled}
                className={Ui_Functions.Helper.isFloat(inputIndex) ? classNameStar1 : classNameStar2}
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
        <div className={`rating gap-1 ${`${classAttributes} ${(className as string) || ''}`} `} style={style}>
          {[1, 2, 3, 4, 5].map(inputIndex => (
            <input
              key={inputIndex}
              type="radio"
              name={name}
              disabled={disabled}
              className={classNameStar}
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
