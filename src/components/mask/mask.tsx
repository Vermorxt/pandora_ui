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

const Ui_Mask = forwardRef<HTMLImageElement, Ui_MaskProps>(({ onClick, className, name, style, src, ...rest }, ref) => {
  const {
    squircle,
    hexagon,
    triangle,
    triangle2,
    triangle3,
    triangle4,
    heart,
    hexagon2,
    decagon,
    pentagon,
    diamond,
    square,
    circle,
    parallelogram,
    parallelogram2,
    parallelogram3,
    parallelogram4,
    star,
    star2,
  } = rest

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

  const usedShape = getUsedAttributes(rest, {
    squircle,
    hexagon,
    triangle,
    triangle2,
    triangle3,
    triangle4,
    heart,
    hexagon2,
    decagon,
    pentagon,
    diamond,
    square,
    circle,
    parallelogram,
    parallelogram2,
    parallelogram3,
    parallelogram4,
    star,
    star2,
  })

  const usedShapeSplit = splitAllCamelCase(usedShape)
  const usedShapeObj = convertObjectToArray(usedShapeSplit)

  const shapeAttributes = getClassNamesFromAttributes({
    names: usedShapeObj,
    convert: convertAttributeToClassName_shapes,
    withoutPrefix: [],
    addPrefix: 'mask',
  })

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`
          mask${' '} 
          ${shapeAttributes ? 'mask ' + shapeAttributes : ''}
          ${(className as string) || ''} 
        `}
      style={style}
      ref={ref}
      src={src || DEFAULT_AVATAR}
      alt=""
    />
  )
})

export default Ui_Mask
