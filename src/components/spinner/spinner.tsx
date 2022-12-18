import { CSSProperties, FC } from 'react'
import scss from './spinner.module.scss'
import React from 'react'
import { T_Ui_Size } from 'components/_types/sizes/sizes'

export interface Ui_SpinnerProps {
  large?: boolean
  medium?: boolean
  small?: boolean
  tiny?: boolean
  strokeWidth?: number
  style?: CSSProperties
  className?: string
  color?: string
  size?: T_Ui_Size
}

const Ui_Spinner: FC<Ui_SpinnerProps> = props => {
  const { strokeWidth, large, medium, small, tiny, style, className, color, size } = props

  let strokeWidthValue = 3

  if (size === 'large') {
    strokeWidthValue = 4
  }
  if (size === 'medium') {
    strokeWidthValue = 3
  }
  if (size === 'small') {
    strokeWidthValue = 2
  }
  if (size === 'tiny') {
    strokeWidthValue = 3
  }

  return (
    <div style={{ width: '100%' }}>
      <svg
        className={`
        ${scss.spinner} 
        ${className ? className : ''}
        ${size === 'large' ? `${scss[size]}` : ''}
        ${size === 'medium' ? `${scss[size]}` : ''}
        ${size === 'small' ? `${scss[size]}` : ''}
        ${size === 'mini' ? `${scss[size]}` : ''}
        ${size === 'tiny' ? `${scss[size]}` : ''}
        `}
        viewBox="0 0 50 50"
        style={style}
      >
        <circle
          className={scss.path}
          style={color ? { stroke: color } : undefined}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth={strokeWidth || strokeWidthValue}
        ></circle>
      </svg>
    </div>
  )
}

export default Ui_Spinner
