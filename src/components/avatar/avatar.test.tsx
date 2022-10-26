import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_AvatarProps } from './type'
import Ui_Avatar from '../avatar'
import React from 'react'

const defaultProps: Ui_AvatarProps = {
  roundedXl: false,
  rounded2xl: false,
  rounded3xl: false,
  roundedLg: false,
  roundedFull: false,
  ringOffset: '8',
}

const selector = 'avatar'

describe('@cms/core/Ui_Avatar', () => {
  checkAccessibility([<Ui_Avatar {...defaultProps} ref={null} />])
  itSupportsSystemProps({
    component: Ui_Avatar,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Avatar {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Avatar {...defaultProps} horizontal ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders ONLINE status based on prop', () => {
    const { container: available } = render(<Ui_Avatar {...defaultProps} online ref={null} />)
    const { container: notAvailable } = render(<Ui_Avatar {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.online`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.online`)).toBeNull()
  })

  it('renders OFFLINE status based on prop', () => {
    const { container: available } = render(<Ui_Avatar {...defaultProps} offline ref={null} />)
    const { container: notAvailable } = render(<Ui_Avatar {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.offline`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.offline`)).toBeNull()
  })

  it('renders usePlaceHolder status based on prop', () => {
    const { container: available } = render(<Ui_Avatar {...defaultProps} usePlaceHolder ref={null} />)
    const { container: notAvailable } = render(<Ui_Avatar {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.bg-neutral-focus.text-neutral-content`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.bg-neutral-focus.text-neutral-content`)).toBeNull()
  })

  it('renders SIZE classes', async () => {
    await itHasCssClass(<Ui_Avatar large />, '.w-32')
    await itHasCssClass(<Ui_Avatar medium />, '.w-20')
    await itHasCssClass(<Ui_Avatar small />, '.w-16')
    await itHasCssClass(<Ui_Avatar mini />, '.w-12')
    await itHasCssClass(<Ui_Avatar tiny />, '.w-8')
  })

  it('renders SHAPE classes', async () => {
    await itHasCssClass(<Ui_Avatar triangle />, '.mask-triangle')
    await itHasCssClass(<Ui_Avatar squircle />, '.mask-squircle')
    await itHasCssClass(<Ui_Avatar hexagon />, '.mask-hexagon')
  })

  it('renders RING classes', async () => {
    const offset = '8'
    const color = 'primary'

    await itHasCssClass(<Ui_Avatar ring />, '.ring')
    await itHasCssClass(<Ui_Avatar ring ringPrimary />, '.ring-primary')
    await itHasCssClass(<Ui_Avatar ring ringSecondary />, '.ring-secondary')
    await itHasCssClass(<Ui_Avatar ring ringOffset={offset} />, `.ring-offset-${offset}`)
    await itHasCssClass(<Ui_Avatar ring ringOffset={offset} ringOffsetBackground={color} />, `.ring-offset-${color}`)
  })

  it('renders BORDER_RADIUS classes', async () => {
    await itHasCssClass(<Ui_Avatar roundedXl />, `.rounded-xl`)
    await itHasCssClass(<Ui_Avatar rounded2xl />, `.rounded-2xl`)
    await itHasCssClass(<Ui_Avatar rounded3xl />, `.rounded-3xl`)
    await itHasCssClass(<Ui_Avatar roundedLg />, `.rounded-lg`)
    await itHasCssClass(<Ui_Avatar roundedFull />, `.rounded-full`)
  })
})
