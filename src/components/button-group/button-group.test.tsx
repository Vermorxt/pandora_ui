import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Ui_ButtonGroupProps } from './type'
import React from 'react'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '../../_tests-utils'
import Ui_ButtonGroup from './button-group'

const defaultProps: Ui_ButtonGroupProps = {}

describe('@cms/core/Ui_ButtonGroup', () => {
  itRendersChildren(Ui_ButtonGroup, defaultProps as any)
  checkAccessibility([<Ui_ButtonGroup {...defaultProps} ref={null} />])
  itSupportsSystemProps({
    component: Ui_ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_ButtonGroup {...defaultProps} ref={null} />)

  it('should create snapshot', () => {
    const { container } = render(<Ui_ButtonGroup {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })
})
