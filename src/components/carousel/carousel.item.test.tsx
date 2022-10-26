import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CarouselProps } from './type'
import Ui_Carousel from './carousel'
import React from 'react'

const defaultProps: Ui_CarouselProps = {}

describe('@cms/core/Ui_Carousel.Item', () => {
  checkAccessibility([
    <Ui_Carousel.Item {...defaultProps} ref={null}>
      Test carousel item
    </Ui_Carousel.Item>,
  ])
  itSupportsSystemProps({
    component: Ui_Carousel.Item,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Carousel.Item {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Carousel.Item {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders CAROUSEL_ITEM default class', () => {
    const { container: available } = render(<Ui_Carousel.Item {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.carousel-item`)).toHaveLength(1)
  })

  it('renders CENTER classes', async () => {
    await itHasCssClass(<Ui_Carousel.Item full />, `.w-full`)
    await itHasCssClass(<Ui_Carousel.Item fullHeight />, `.h-full`)
    await itHasCssClass(<Ui_Carousel.Item relative />, `.relative`)
  })
})
