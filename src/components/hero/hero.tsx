import React, { FC, forwardRef } from 'react'
import { Ui_HeroProps } from './type'

export const Ui_Hero: any = forwardRef<
  HTMLDivElement,
  Ui_HeroProps & { Overlay: FC<Ui_HeroProps>; Content: FC<Ui_HeroProps> }
>(({ children, className, id, shadow, bgColor, rounded, center, itemsCenter, minHeightScreen, style }, ref) => {
  return (
    <>
      <div
        className={`
          hero ${className ? className : ''} 
          ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
          ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
          ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : 'bg-base-200'}
          ${center ? `hero-center` : ''}
          ${minHeightScreen ? `min-h-screen` : ''}
          ${itemsCenter ? `items-center` : ''}
        `}
        id={id}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    </>
  )
})

const Overlay: FC = forwardRef<HTMLDivElement, Ui_HeroProps>(({ children, className, style }, ref) => {
  return (
    <div
      className={`hero-overlay 
      ${className ? className : ''} 
      `}
      style={style}
      ref={ref}
    >
      {children}
    </div>
  )
})

const Content: FC = forwardRef<HTMLDivElement, Ui_HeroProps>(
  ({ children, className, flexColReverse, flexCol, textCenter, style }, ref) => {
    return (
      <div
        className={`
          hero-content ${className ? className : ''}
          ${flexCol ? `flex-col lg:flex-row` : ''}
          ${flexColReverse ? `flex-col lg:flex-row-reverse` : ''}
          ${textCenter ? `text-center text-neutral-content` : ''}
        `}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Ui_Hero.Overlay = Overlay
Ui_Hero.Content = Content

export default Ui_Hero
