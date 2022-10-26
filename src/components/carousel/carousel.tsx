import { FC, forwardRef } from 'react'
import Ui_Button from '../button'
import { Ui_CarouselArrowNavigationProps, Ui_CarouselProps } from './type'
import React from 'react'
import { convertObjectToArray, getClassNamesFromAttributes, getUsedAttributes } from '../_utils/css-class-generator'

const Ui_Carousel: any = forwardRef<
  HTMLDivElement,
  Ui_CarouselProps & {
    Item: FC<Ui_CarouselProps>
    Navbar: FC<Ui_CarouselProps>
    ArrowNavigation: FC<Ui_CarouselArrowNavigationProps>
  }
>(({ children, className, ...rest }, ref) => {
  const { center, end, vertical, rounded, style } = rest

  return (
    <div
      ref={ref}
      style={style}
      className={`carousel
      ${className ? className : ''} 
      ${rounded ? 'rounded-box' : ''} 
      ${center ? 'carousel-center' : ''} 
      ${end ? 'carousel-end' : ''} 
      ${vertical ? 'carousel-vertical' : ''} 
      `}
    >
      {children}
    </div>
  )
})

const Item: FC = forwardRef<HTMLDivElement, Ui_CarouselProps>(({ children, className, ...rest }, ref) => {
  const { full, fullHeight, halfWidth, id, relative, style } = rest

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={`carousel-item 
      ${className ? className : ''}
      ${full ? 'w-full' : ''}
      ${fullHeight ? 'h-full' : ''}
      ${halfWidth ? 'w-1/2' : ''}
      ${relative ? 'relative' : ''}
    `}
    >
      {children}
    </div>
  )
})

const Navbar: FC = forwardRef<HTMLDivElement, Ui_CarouselProps>(({ children, className, style, ...rest }, ref) => {
  const { full } = rest

  return (
    <div
      ref={ref}
      style={style}
      className={`flex justify-center w-full py-2 gap-2 
      ${className ? className : ''}
      ${full ? 'w-full' : ''}
    `}
    >
      {children}
    </div>
  )
})

const ArrowNavigation: FC<any> = forwardRef<HTMLDivElement, Ui_CarouselArrowNavigationProps>(({ ...rest }, ref) => {
  const { itemLength, index, usedId, style, className } = rest

  const prevIndex = index - 1 < 0 ? itemLength - 1 : index - 1
  const nextIndex = index + 1 > itemLength - 1 ? 0 : index + 1

  const onClickBtn = (scrollId: string) => {
    const elem = document.getElementById(scrollId)

    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  return (
    <div
      className={`absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ${
        className ? className : ''
      }`}
      ref={ref}
      style={style}
    >
      <Ui_Button circle onClick={() => onClickBtn(`${usedId}_${prevIndex}`)}>
        ❮
      </Ui_Button>
      <Ui_Button circle onClick={() => onClickBtn(`${usedId}_${nextIndex}`)}>
        ❯
      </Ui_Button>
    </div>
  )
})

Ui_Carousel.Item = Item
Ui_Carousel.Navbar = Navbar
Ui_Carousel.ArrowNavigation = ArrowNavigation

export default Ui_Carousel
