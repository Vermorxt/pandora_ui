import { CSSProperties, HTMLProps } from 'react'
export interface Ui_CarouselProps extends HTMLProps<HTMLDivElement> {
  center?: boolean
  vertical?: boolean
  end?: boolean
  full?: boolean
  fullHeight?: boolean
  halfWidth?: boolean
  rounded?: boolean
  relative?: boolean
}
export interface Ui_CarouselArrowNavigationProps {
  index: number
  itemLength: number
  usedId: string
  style?: CSSProperties
  className?: string
}
