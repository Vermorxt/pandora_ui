import { CSSProperties, HTMLProps } from 'react'
export interface Ui_CarouselProps extends HTMLProps<HTMLDivElement> {
  vertical?: boolean
  rounded?: boolean
  relative?: boolean
  width?: 'full' | 'half'
  height?: string // NOTE: use tailwind height without `h-` https://tailwindcss.com/docs/height
  position?: 'start' | 'center' | 'end'
}
export interface Ui_CarouselArrowNavigationProps {
  index: number
  itemLength: number
  usedId: string
  style?: CSSProperties
  className?: string
  width?: 'full' | 'half'
}
