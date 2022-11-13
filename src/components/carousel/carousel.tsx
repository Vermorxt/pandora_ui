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
  const { vertical, rounded, position, width, height, style } = rest

  return (
    <div
      ref={ref}
      style={style}
      className={`carousel
      ${className ? className : ''}
      ${height ? `h-${height}` : ''}
      ${width && width === 'full' ? 'w-full' : ''}
      ${width && width === 'half' ? 'w-1/2' : ''}
      ${rounded && rounded === true ? 'rounded-box' : ''} 
      ${position && position === 'start' ? 'carousel-start' : ''} 
      ${position && position === 'center' ? 'carousel-center' : ''} 
      ${position && position === 'end' ? 'carousel-end' : ''} 
      ${vertical && vertical === true ? 'carousel-vertical' : ''} 
      `}
    >
      {children}
    </div>
  )
})

const Item: FC = forwardRef<HTMLDivElement, Ui_CarouselProps>(({ children, className, ...rest }, ref) => {
  const { height, id, relative, style } = rest

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={`carousel-item w-full
      ${className ? className : ''}
      ${height ? `h-${height}` : ''}
      ${relative && relative === true ? 'relative' : ''}
    `}
    >
      {children}
    </div>
  )
})

const Navbar: FC = forwardRef<HTMLDivElement, Ui_CarouselProps>(({ children, className, style, ...rest }, ref) => {
  const { width } = rest

  return (
    <div
      ref={ref}
      style={style}
      className={`flex justify-center py-2 gap-2 
      ${width && width === 'full' ? 'w-full' : ''}
      ${width && width === 'half' ? 'w-1/2' : ''}
      ${className ? className : ''}
    `}
    >
      {children}
    </div>
  )
})

const ArrowNavigation: FC<any> = forwardRef<HTMLDivElement, Ui_CarouselArrowNavigationProps>(({ ...rest }, ref) => {
  const { width, itemLength, index, usedId, style, className } = rest

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
      }
      ${width && width === 'full' ? 'w-full' : ''}
      ${width && width === 'half' ? 'w-1/2' : ''}`}
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
