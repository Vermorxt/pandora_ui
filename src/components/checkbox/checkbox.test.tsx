import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_CheckboxProps } from './type'
import Ui_Checkbox from './Checkbox'
import React from 'react'

const defaultProps: Ui_CheckboxProps = {}

const selector = 'text'

describe('@cms/core/Ui_Checkbox', () => {
  checkAccessibility([<Ui_Checkbox {...defaultProps} label="test" ref={null} />])
  itSupportsSystemProps({
    component: Ui_Checkbox,
    props: defaultProps,
    refType: HTMLInputElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Checkbox {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Checkbox {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders SIZE classes', async () => {
    await itHasCssClass(<Ui_Checkbox size="large" label="x" />, `.${selector}-xl`)
    await itHasCssClass(<Ui_Checkbox size="medium" label="x" />, `.${selector}-base`)
    await itHasCssClass(<Ui_Checkbox size="small" label="x" />, `.${selector}-sm`)
    await itHasCssClass(<Ui_Checkbox size="mini" label="x" />, `.${selector}-xs`)
    await itHasCssClass(<Ui_Checkbox size="tiny" label="x" />, `.${selector}-xxs`)
  })

  it('should be disabled', async () => {
    const labelText = 'label-text'

    const { container: checkbox } = render(<Ui_Checkbox label={labelText} disabled={true} ref={null} />)

    const label = screen.getByLabelText(labelText)
    expect(label).toBeDisabled()
  })

  it('should have checked state on label click', async () => {
    let checkboxChecked = false
    const mockCallback = jest.fn(e => (checkboxChecked = e?.target?.checked))

    const labelText = 'label-text'
    const { container: checkbox } = render(
      <Ui_Checkbox {...defaultProps} checked={checkboxChecked} label={labelText} ref={null} onChange={mockCallback} />
    )

    expect(checkbox).not.toBeChecked()

    const label = screen.getByLabelText(labelText)
    await fireEvent.click(label)

    expect(mockCallback).toHaveBeenCalled()
    expect(checkboxChecked).toBeTruthy()
  })

  it('renders bg color classes', async () => {
    await itHasCssClass(<Ui_Checkbox variant="primary" />, `.checkbox-primary`)
    await itHasCssClass(<Ui_Checkbox variant="secondary" />, `.checkbox-secondary`)
    await itHasCssClass(<Ui_Checkbox variant="accent" />, `.checkbox-accent`)
    await itHasCssClass(<Ui_Checkbox variant="info" />, `.checkbox-info`)
    await itHasCssClass(<Ui_Checkbox variant="error" />, `.checkbox-error`)
    await itHasCssClass(<Ui_Checkbox variant="success" />, `.checkbox-success`)
    await itHasCssClass(<Ui_Checkbox variant="warning" />, `.checkbox-warning`)
    await itHasCssClass(<Ui_Checkbox variant="ghost" />, `.checkbox-ghost`)
    await itHasCssClass(<Ui_Checkbox variant="neutral" />, `.checkbox-neutral`)
    await itHasCssClass(<Ui_Checkbox variant="link" />, `.checkbox-link`)
  })
})
