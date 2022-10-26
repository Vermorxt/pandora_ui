import { CSSProperties, FC } from 'react'
import scss from './spinner.module.scss'
import React from 'react'

interface Ui_SpinnerProps {
  large?: boolean
  medium?: boolean
  small?: boolean
  tiny?: boolean
  strokeWidth?: number
  style?: CSSProperties
  className?: string
  color?: string
}

const Ui_Spinner: FC<Ui_SpinnerProps> = props => {
  const { strokeWidth, large, medium, small, tiny, style, className, color } = props

  let sizeClass = 'small'
  let strokeWidthValue = 3

  if (large) {
    sizeClass = 'large'
    strokeWidthValue = 4
  }
  if (medium) {
    sizeClass = 'medium'
    strokeWidthValue = 3
  }
  if (small) {
    sizeClass = 'small'
    strokeWidthValue = 2
  }
  if (tiny) {
    sizeClass = 'tiny'
    strokeWidthValue = 3
  }

  return (
    <div style={{ width: '100%' }}>
      <svg
        className={`${scss.spinner} ${scss[sizeClass]} ${className ? className : ''}`}
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
