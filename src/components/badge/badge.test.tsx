import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_BadgeProps } from './type'
import Ui_Badge from './badge'
import React from 'react'

const defaultProps: Ui_BadgeProps = {}

const selector = 'badge'

describe('@cms/core/Ui_Badge', () => {
  itRendersChildren(Ui_Badge, defaultProps as any)
  checkAccessibility([<Ui_Badge {...defaultProps} ref={null} />])
  itSupportsSystemProps({
    component: Ui_Badge,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Badge {...defaultProps} ref={null} />)

  it('should create snapshot', () => {
    const { container } = render(<Ui_Badge {...defaultProps} loading ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders NO_ANIMATION status based on prop', () => {
    const { container: available } = render(<Ui_Badge {...defaultProps} noAnimation ref={null} />)
    const { container: notAvailable } = render(<Ui_Badge {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.no-animation`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.no-animation`)).toBeNull()
  })

  it('renders LOADING status based on prop', () => {
    const { container: available } = render(<Ui_Badge {...defaultProps} loading ref={null} />)
    const { container: notAvailable } = render(<Ui_Badge {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.loading`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.loading`)).toBeNull()
  })

  it('renders SIZE classes', async () => {
    await itHasCssClass(<Ui_Badge large />, `.${selector}-lg`)
    await itHasCssClass(<Ui_Badge medium />, `.${selector}-md`)
    await itHasCssClass(<Ui_Badge small />, `.${selector}-sm`)
    await itHasCssClass(<Ui_Badge tiny />, `.${selector}-xs`)
    await itHasCssClass(<Ui_Badge mini />, `.${selector}-xxs`)
    await itHasCssClass(<Ui_Badge wide />, `.${selector}-wide`)
    await itHasCssClass(<Ui_Badge full />, `.${selector}-block`)
  })
})
