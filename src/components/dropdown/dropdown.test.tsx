import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Ui_DropdownProps } from './type'
import { Ui_Dropdown } from './dropdown'
import React from 'react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'

const defaultProps: Ui_DropdownProps = {}

const selector = 'dropdown'

describe('@cms/core/Ui_Dropdown', () => {
  checkAccessibility([
    <Ui_Dropdown {...defaultProps} ref={null}>
      Test
    </Ui_Dropdown>,
  ])
  itSupportsSystemProps({
    component: Ui_Dropdown,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Ui_Dropdown {...defaultProps} ref={null}>
        Test
      </Ui_Dropdown>
    )
    expect(container).toMatchSnapshot()
  })
  // NOTE: (possible debug): debugComponent(<Ui_Card.Title {...defaultProps} ref={null} />)

  it('renders default class', () => {
    const { container: available } = render(<Ui_Dropdown {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.${selector}`)).toHaveLength(1)
  })
})
