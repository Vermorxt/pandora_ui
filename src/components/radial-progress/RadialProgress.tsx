import { forwardRef, useEffect, useRef } from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'
import { Ui_RadialProgressProps } from './type'
import React from 'react'

const Ui_RadialProgress: any = forwardRef<HTMLDivElement, Ui_RadialProgressProps>(
  (
    {
      onClick,
      className,
      name,
      children,
      type,
      style,
      value,
      thickness,
      size,
      max,
      primary,
      secondary,
      textPrimary,
      textSecondary,
      ...rest
    },
    ref
  ) => {
    const withoutPrefix_progress = ['loading', 'noAnimation']
    const convertAttributeToClassName_progress = [
      ['large', 'medium', 'small', 'tiny', 'mini', 'wide', 'full'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs', 'wide', 'block'], // NOTE: attributes translated based on attributes above
    ]

    const refElem = useRef<HTMLDivElement>(null) || ref

    const setProgressValue = (val: number) => {
      refElem?.current?.style.setProperty('--value', `${val}`)
    }

    const setSizeValue = (val: string) => {
      refElem?.current?.style.setProperty('--size', `${val}`)
    }

    const setThicknessValue = (val: string) => {
      refElem?.current?.style.setProperty('--thickness', `${val}`)
    }

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_progress,
      withoutPrefix: withoutPrefix_progress,
      addPrefix: 'progress',
    })

    useEffect(() => {
      if (value) {
        setProgressValue(value)
      }
    }, [value])

    useEffect(() => {
      if (size) {
        setSizeValue(size)
      }
    }, [size])

    useEffect(() => {
      if (thickness) {
        setThicknessValue(thickness)
      }
    }, [thickness])

    return (
      <div
        {...{ onClick, name }}
        className={`radial-progress${' '}
        ${(className as string) || ''}
        ${textPrimary ? 'text-primary' : ''}
        ${textSecondary ? 'text-secondary' : ''}
        ${primary ? 'bg-primary text-primary-content border-4 border-primary' : ''}
        ${secondary ? 'bg-secondary text-secondary-content border-4 border-secondary' : ''}
        ${classAttributes}
        `}
        style={style}
        ref={ref || refElem}
      >
        {children}
      </div>
    )
  }
)

export default Ui_RadialProgress
