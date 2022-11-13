import { FC, forwardRef, ForwardRefExoticComponent } from 'react'
import { Ui_CardProps } from './type'
import React from 'react'

interface CardComponent extends FC<Ui_CardProps> {
  Body: typeof CardBody
  Title: typeof CardTitle
  Actions: typeof CardActions
}

const Ui_Card: FC<Ui_CardProps> & CardComponent = ({ children, className, style, ...rest }) => {
  const { imageAsBackground, compact, bgBase, cardSide, variant } = rest
  const { glass, size } = rest

  return (
    <div
      className={`card shadow-xl style-override
      ${imageAsBackground ? 'image-full' : ''}
      ${bgBase ? `bg-base-${bgBase}` : ''}
      ${!bgBase && !variant && !glass ? 'bg-base-100' : ''}
      ${compact ? 'card-compact' : ''}
      ${variant ? `bg-${variant} text-${variant}-content` : ''}
      ${glass ? 'glass' : ''}
      ${cardSide && cardSide === true ? 'card-side' : ''}
      ${cardSide && cardSide === 'large' ? 'lg:card-side' : ''}
      ${size ? `w-${size}` : 'w-96'}
      ${className ? className : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}

const CardTitle = forwardRef<HTMLDivElement, Ui_CardProps>(({ children, className, style, ...rest }, ref) => {
  return (
    <div className={`card-title ${className ? className : ''}`} ref={ref} style={style}>
      {children}
    </div>
  )
})

const CardBody = forwardRef<HTMLDivElement, Ui_CardProps>(({ children, className, ...rest }, ref) => {
  const { itemsCenter, textCenter, style } = rest

  return (
    <div
      className={`card-body ${className ? className : ''} 
    ${itemsCenter ? 'items-center' : ''}
    ${textCenter ? 'text-center' : ''}
    `}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  )
})

const CardActions = forwardRef<HTMLDivElement, Ui_CardProps>(
  ({ children, className, style, actionPlacement, ...rest }, ref) => {
    return (
      <div
        className={`card-actions 
        ${actionPlacement ? `justify-${actionPlacement}` : ''} 
        ${!actionPlacement ? 'justify-end' : ''} 
        ${className ? className : ''}`}
        ref={ref}
        style={style}
      >
        {children}
      </div>
    )
  }
)

Ui_Card.Title = CardTitle
Ui_Card.Body = CardBody
Ui_Card.Actions = CardActions

export default Ui_Card
