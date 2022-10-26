import { FC, forwardRef, ForwardRefExoticComponent } from 'react'
import { Ui_CardProps } from './type'
import React from 'react'

interface CardComponent extends FC<Ui_CardProps> {
  Body: typeof CardBody
  Title: typeof CardTitle
  Actions: typeof CardActions
}

const Ui_Card: FC<Ui_CardProps> & CardComponent = ({ children, className, style, ...rest }) => {
  const { imageAsBackground, compact, bgBase, cardSideLarge } = rest
  const {
    bgPrimary,
    bgSecondary,
    bgNeutral,
    textPrimaryContent,
    textSecondaryContent,
    textNeutralContent,
    glass,
    cardSide,
    w96,
  } = rest

  return (
    <div
      className={`card shadow-xl 
      ${imageAsBackground ? 'image-full' : ''}
      ${bgBase ? `bg-base-${bgBase}` : ''}
      ${!bgBase && !bgPrimary && !bgSecondary && !bgNeutral && !glass ? 'bg-base-100' : ''}
      ${compact ? 'card-compact' : ''}
      ${bgPrimary ? 'bg-primary' : ''}
      ${bgSecondary ? 'bg-secondary' : ''}
      ${bgNeutral ? 'bg-neutral' : ''}
      ${textPrimaryContent ? 'text-primary-content' : ''}
      ${textSecondaryContent ? 'text-secondary-content' : ''}
      ${textNeutralContent ? 'text-neutral-content' : ''}
      ${glass ? 'glass' : ''}
      ${cardSide ? 'card-side' : ''}
      ${w96 ? 'w-96' : ''}
      ${cardSideLarge ? 'lg:card-side' : ''}
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
  ({ children, className, style, actionCenter, actionStart, actionSpaceBetween, ...rest }, ref) => {
    return (
      <div
        className={`card-actions 
        ${actionStart ? 'justify-start' : ''} 
        ${actionCenter ? 'justify-center' : ''} 
        ${actionSpaceBetween ? 'justify-between' : ''} 
        ${!actionStart && !actionCenter && !actionSpaceBetween ? 'justify-end' : ''} 
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
