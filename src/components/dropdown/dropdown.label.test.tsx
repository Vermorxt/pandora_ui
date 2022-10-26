import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_DropdownProps } from './type'
import React from 'react'
import Ui_Dropdown from './dropdown'

const defaultProps: Ui_DropdownProps = {}

const selector = ''

describe('@cms/core/Ui_Dropdown.Label', () => {
  checkAccessibility([
    <Ui_Dropdown.Label {...defaultProps} ref={null}>
      Test
    </Ui_Dropdown.Label>,
  ])
  itSupportsSystemProps({
    component: Ui_Dropdown,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Ui_Dropdown.Label {...defaultProps} ref={null}>
        Test
      </Ui_Dropdown.Label>
    )
    expect(container).toMatchSnapshot()
  })
  // NOTE: (possible debug): debugComponent(<Ui_Card.Title {...defaultProps} ref={null} />)
})
