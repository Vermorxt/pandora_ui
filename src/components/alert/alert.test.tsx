import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '../../_tests-utils'
import { itHasButtonAndCallbackFired } from '../../_tests-utils/it-has-button-and-callback-fired'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_AlertProps } from './type'
import Ui_Alert from './alert'

const defaultProps: Ui_AlertProps = {
  className: 'test',
  noIcon: false,
  onDenyButtonText: 'deny',
  onAcceptButtonText: 'ok',
  onDeny: () => false,
  onAccept: () => true,
}

const selector = 'alert'

describe('@cms/core/Ui_Alert', () => {
  itRendersChildren(Ui_Alert, defaultProps as any)
  checkAccessibility([<Ui_Alert {...defaultProps} ref={null} />])
  itSupportsSystemProps({
    component: Ui_Alert,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Alert {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Alert {...defaultProps} noIcon ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders icon based on noIcon prop', () => {
    const { container: available } = render(<Ui_Alert {...defaultProps} noIcon ref={null} />)
    const { container: notAvailable } = render(<Ui_Alert {...defaultProps} ref={null} />)

    expect(available.querySelector('.used-alert-icon')).toBeNull()
    expect(notAvailable.querySelectorAll('.used-alert-icon')).toHaveLength(1)
  })
  it('renders ok button', async () => {
    const { container } = render(<Ui_Alert {...defaultProps} ref={null} />)

    const button = screen.getByRole('button', { name: 'ok' })

    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('renders deny button', async () => {
    const { container } = render(<Ui_Alert {...defaultProps} ref={null} />)

    const button = screen.getByRole('button', { name: 'deny' })

    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('clicks OK button and has called function', async () => {
    const mockCallback = jest.fn()
    const { container } = render(<Ui_Alert {...defaultProps} ref={null} onAccept={mockCallback} />)

    await itHasButtonAndCallbackFired('ok', mockCallback)
  })

  it('clicks DENY button and has called function', async () => {
    const mockCallback = jest.fn()
    const { container } = render(<Ui_Alert {...defaultProps} ref={null} onDeny={mockCallback} />)

    await itHasButtonAndCallbackFired('deny', mockCallback)
  })

  it('renders bg colors', async () => {
    await itHasCssClass(<Ui_Alert primary />, `.${selector}-primary`)
    await itHasCssClass(<Ui_Alert secondary />, `.${selector}-secondary`)
    await itHasCssClass(<Ui_Alert accent />, `.${selector}-accent`)
    await itHasCssClass(<Ui_Alert info />, `.${selector}-info`)
    await itHasCssClass(<Ui_Alert error />, `.${selector}-error`)
    await itHasCssClass(<Ui_Alert success />, `.${selector}-success`)
    await itHasCssClass(<Ui_Alert warning />, `.${selector}-warning`)
    await itHasCssClass(<Ui_Alert ghost />, `.${selector}-ghost`)
    await itHasCssClass(<Ui_Alert neutral />, `.${selector}-neutral`)
    await itHasCssClass(<Ui_Alert link />, `.${selector}-link`)
  })
})
