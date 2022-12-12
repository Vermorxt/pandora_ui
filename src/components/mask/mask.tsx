import { forwardRef } from 'react'
import { DEFAULT_AVATAR } from '../../_constants/main'
import {
  convertObjectToArray,
  getClassNamesFromAttributes,
  getUsedAttributes,
  splitAllCamelCase,
} from '../_utils/css-class-generator'
import { Ui_MaskProps } from './type'
import React from 'react'

const Ui_Mask = forwardRef<HTMLImageElement, Ui_MaskProps>(
  ({ onClick, className, name, style, src, shape, ...rest }, ref) => {
    const convertAttributeToClassName_shapes = [
      [
        'squircle',
        'hexagon',
        'triangle',
        'triangle-2',
        'triangle-3',
        'triangle-4',
        'heart',
        'hexagon-2',
        'decagon',
        'pentagon',
        'diamond',
        'square',
        'circle',
        'parallelogram',
        'parallelogram-2',
        'parallelogram-3',
        'parallelogram-4',
        'star',
        'star-2',
      ], // NOTE: attributes to convert
      [], // NOTE: attributes translated based on attributes above
    ]

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={`
          mask${' '} 
          ${shape && shape === 'squircle' ? 'mask-squircle' : ''}
          ${shape && shape === 'hexagon' ? 'mask-hexagon' : ''}
          ${shape && shape === 'hexagon2' ? 'mask-hexagon-2' : ''}
          ${shape && shape === 'triangle' ? 'mask-triangle' : ''}
          ${shape && shape === 'triangle2' ? 'mask-triangle-2' : ''}
          ${shape && shape === 'triangle3' ? 'mask-triangle-3' : ''}
          ${shape && shape === 'triangle4' ? 'mask-triangle-4' : ''}
          ${shape && shape === 'heart' ? 'mask-heart' : ''}
          ${shape && shape === 'decagon' ? 'mask-decagon' : ''}
          ${shape && shape === 'pentagon' ? 'mask-pentagon' : ''}
          ${shape && shape === 'diamond' ? 'mask-diamond' : ''}
          ${shape && shape === 'square' ? 'mask-square' : ''}
          ${shape && shape === 'circle' ? 'mask-circle' : ''}
          ${shape && shape === 'parallelogram' ? 'mask-parallelogram' : ''}
          ${shape && shape === 'parallelogram2' ? 'mask-parallelogram-2' : ''}
          ${shape && shape === 'parallelogram3' ? 'mask-parallelogram-3' : ''}
          ${shape && shape === 'parallelogram4' ? 'mask-parallelogram-4' : ''}
          ${shape && shape === 'star' ? 'mask-star' : ''}
          ${shape && shape === 'star2' ? 'mask-star-2' : ''}

          ${(className as string) || ''} 
        `}
        style={style}
        ref={ref}
        src={src || DEFAULT_AVATAR}
        alt=""
      />
    )
  }
)

export default Ui_Mask
