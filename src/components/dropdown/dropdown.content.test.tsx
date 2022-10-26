import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_DropdownProps } from './type'
import { Ui_Dropdown } from './dropdown'
import React from 'react'

const defaultProps: Ui_DropdownProps = {}

const selector = 'dropdown-content'

describe('@cms/core/Ui_Dropdown.Content', () => {
  checkAccessibility([
    <Ui_Dropdown.Content {...defaultProps} ref={null}>
      Test
    </Ui_Dropdown.Content>,
  ])
  itSupportsSystemProps({
    component: Ui_Dropdown,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Ui_Dropdown.Content {...defaultProps} ref={null}>
        Test
      </Ui_Dropdown.Content>
    )
    expect(container).toMatchSnapshot()
  })
  // NOTE: (possible debug): debugComponent(<Ui_Card.Title {...defaultProps} ref={null} />)

  it('renders default class', () => {
    const { container: available } = render(<Ui_Dropdown.Content {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.${selector}`)).toHaveLength(1)
  })

  it('renders CSS classes', async () => {
    await itHasCssClass(<Ui_Dropdown.Content defaultBgClass />, `.bg-base-100`)
  })
})
