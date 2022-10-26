import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CarouselProps } from './type'
import Ui_Carousel from './carousel'
import React from 'react'

const defaultProps: Ui_CarouselProps = {}

const selector = 'carousel'

describe('@cms/core/Ui_Carousel', () => {
  checkAccessibility([
    <Ui_Carousel {...defaultProps} ref={null}>
      Test carousel
    </Ui_Carousel>,
  ])
  itSupportsSystemProps({
    component: Ui_Carousel,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Carousel {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Carousel {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders STYLE classes', async () => {
    await itHasCssClass(<Ui_Carousel center />, `.${selector}-center`)
    await itHasCssClass(<Ui_Carousel end />, `.${selector}-end`)
    await itHasCssClass(<Ui_Carousel vertical />, `.${selector}-vertical`)
    await itHasCssClass(<Ui_Carousel rounded />, `.rounded-box`)
  })
})
