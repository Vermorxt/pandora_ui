import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CardProps } from './type'
import Ui_Card from './Card'
import React from 'react'
const defaultProps: Ui_CardProps = {}

const selector = 'card'

describe('@cms/core/Ui_Card', () => {
  checkAccessibility([
    <Ui_Card {...defaultProps} ref={null}>
      Test
    </Ui_Card>,
  ])
  itSupportsSystemProps({
    component: Ui_Card,
    props: defaultProps,
    // refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Card {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Card {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders IMAGE_AS_BACKGROUND status based on prop', () => {
    const { container: available } = render(<Ui_Card {...defaultProps} imageAsBackground ref={null} />)
    const { container: notAvailable } = render(<Ui_Card {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.image-full`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.image-full`)).toBeNull()
  })

  it('renders W-96 status based on prop', () => {
    const { container: available } = render(<Ui_Card {...defaultProps} size="96" ref={null} />)
    const { container: notAvailable } = render(<Ui_Card {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.w-96`)).toHaveLength(1)
    expect(notAvailable.querySelectorAll(`.w-96`)).toHaveLength(1)
  })

  it('renders COMPACT status based on prop', () => {
    const { container: available } = render(<Ui_Card {...defaultProps} compact ref={null} />)
    const { container: notAvailable } = render(<Ui_Card {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.card-compact`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.card-compact`)).toBeNull()
  })

  it('renders COLOR classes', async () => {
    const bgBase100 = '100'
    const bgBase200 = '200'
    const bgBase300 = '300'

    await itHasCssClass(<Ui_Card variant="primary" />, `.bg-primary`)
    await itHasCssClass(<Ui_Card variant="secondary" />, `.bg-secondary`)
    await itHasCssClass(<Ui_Card variant="neutral" />, `.bg-neutral`)
    await itHasCssClass(<Ui_Card variant="primary" />, `.text-primary-content`)
    await itHasCssClass(<Ui_Card variant="secondary" />, `.text-secondary-content`)
    await itHasCssClass(<Ui_Card variant="neutral" />, `.text-neutral-content`)
    await itHasCssClass(<Ui_Card glass />, `.glass`)
    await itHasCssClass(<Ui_Card cardSide />, `.card-side`)
    await itHasCssClass(<Ui_Card bgBase={bgBase100} />, `.bg-base-${bgBase100}`)
    await itHasCssClass(<Ui_Card bgBase={bgBase200} />, `.bg-base-${bgBase200}`)
    await itHasCssClass(<Ui_Card bgBase={bgBase300} />, `.bg-base-${bgBase300}`)
  })
})
