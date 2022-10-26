import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CarouselProps } from './type'
import Ui_Carousel from './carousel'

const defaultProps: Ui_CarouselProps = {}

describe('@cms/core/Ui_Carousel.Navbar', () => {
  checkAccessibility([
    <Ui_Carousel.Navbar {...defaultProps} ref={null}>
      Test
    </Ui_Carousel.Navbar>,
  ])
  itSupportsSystemProps({
    component: Ui_Carousel.Navbar,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Carousel.Navbar {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Carousel.Navbar {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders CAROUSEL_NAVBAR default class', () => {
    const { container: available } = render(<Ui_Carousel.Navbar {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.flex.justify-center.w-full`)).toHaveLength(1)
  })

  it('renders CENTER classes', async () => {
    await itHasCssClass(<Ui_Carousel.Navbar full />, `.w-full`)
  })
})
