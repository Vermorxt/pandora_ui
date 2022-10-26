import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_CarouselProps } from './type'
import Ui_Carousel from './carousel'
import React from 'react'

const defaultProps: Ui_CarouselProps = {}

describe('@cms/core/Ui_Carousel.ArrowNavigation', () => {
  checkAccessibility([
    <Ui_Carousel.ArrowNavigation {...defaultProps} ref={null}>
      Test
    </Ui_Carousel.ArrowNavigation>,
  ])
  itSupportsSystemProps({
    component: Ui_Carousel.ArrowNavigation,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Carousel.ArrowNavigation {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Carousel.ArrowNavigation {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders CAROUSEL_NAVBAR default class', () => {
    const { container: available } = render(<Ui_Carousel.ArrowNavigation {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.absolute.flex.justify-between.transform`)).toHaveLength(1)
  })
})
