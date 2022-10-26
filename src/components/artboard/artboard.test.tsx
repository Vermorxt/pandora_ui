import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_ArtboardProps } from './type'
import React from 'react'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import Ui_Artboard from './artboard'

const defaultProps: Ui_ArtboardProps = {
  phone1: false,
  phone2: false,
  phone3: false,
  phone4: false,
  phone5: false,
  phone6: false,
  horizontal: false,
}

const selector = 'artboard'

describe('@cms/core/Ui_Artboard', () => {
  itRendersChildren(Ui_Artboard, defaultProps as any)
  checkAccessibility([<Ui_Artboard {...defaultProps} ref={null} />])
  itSupportsSystemProps({
    component: Ui_Artboard,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Artboard {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Artboard {...defaultProps} horizontal ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders horizontal based on prop', () => {
    const { container: available } = render(<Ui_Artboard {...defaultProps} horizontal ref={null} />)
    const { container: notAvailable } = render(<Ui_Artboard {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.${selector}-horizontal`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.${selector}-horizontal`)).toBeNull()
  })

  it('renders demo based on prop', () => {
    const { container: available } = render(<Ui_Artboard {...defaultProps} demo ref={null} />)
    const { container: notAvailable } = render(<Ui_Artboard {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.${selector}-demo`)).toHaveLength(1)
    expect(notAvailable.querySelector(`.${selector}-demo`)).toBeNull()
  })

  // it('renders bg color classes', async () => {
  //   await itHasCssClass(<Ui_Artboard primary />, getBgClassName('primary'))
  //   await itHasCssClass(<Ui_Artboard secondary />, getBgClassName('secondary'))
  //   await itHasCssClass(<Ui_Artboard accent />, getBgClassName('accent'))
  //   await itHasCssClass(<Ui_Artboard info />, getBgClassName('info'))
  //   await itHasCssClass(<Ui_Artboard error />, getBgClassName('error'))
  //   await itHasCssClass(<Ui_Artboard success />, getBgClassName('success'))
  //   await itHasCssClass(<Ui_Artboard warning />, getBgClassName('warning'))
  //   await itHasCssClass(<Ui_Artboard ghost />, getBgClassName('ghost'))
  //   await itHasCssClass(<Ui_Artboard neutral />, getBgClassName('neutral'))
  //   await itHasCssClass(<Ui_Artboard link />, getBgClassName('link'))
  // })

  // it('renders bg-text colors classes', async () => {
  //   await itHasCssClass(<Ui_Artboard primary />, getTextClassName('primary'))
  //   await itHasCssClass(<Ui_Artboard secondary />, getTextClassName('secondary'))
  //   await itHasCssClass(<Ui_Artboard accent />, getTextClassName('accent'))
  //   await itHasCssClass(<Ui_Artboard info />, getTextClassName('info'))
  //   await itHasCssClass(<Ui_Artboard error />, getTextClassName('error'))
  //   await itHasCssClass(<Ui_Artboard success />, getTextClassName('success'))
  //   await itHasCssClass(<Ui_Artboard warning />, getTextClassName('warning'))
  //   await itHasCssClass(<Ui_Artboard ghost />, getTextClassName('ghost'))
  //   await itHasCssClass(<Ui_Artboard neutral />, getTextClassName('neutral'))
  //   await itHasCssClass(<Ui_Artboard link />, getTextClassName('link'))
  // })

  it('renders phone variants', async () => {
    await itHasCssClass(<Ui_Artboard phone1 />, `.phone-1`)
    await itHasCssClass(<Ui_Artboard phone2 />, `.phone-2`)
    await itHasCssClass(<Ui_Artboard phone3 />, `.phone-3`)
    await itHasCssClass(<Ui_Artboard phone4 />, `.phone-4`)
    await itHasCssClass(<Ui_Artboard phone5 />, `.phone-5`)
    await itHasCssClass(<Ui_Artboard phone6 />, `.phone-6`)
  })
})
