import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_CardProps } from './type'
import Ui_Card from './card'
import React from 'react'
const defaultProps: Ui_CardProps = {}

describe('@cms/core/Ui_Card.Actions', () => {
  checkAccessibility([
    <Ui_Card.Actions {...defaultProps} ref={null}>
      Test
    </Ui_Card.Actions>,
  ])
  itSupportsSystemProps({
    component: Ui_Card.Actions,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(<Ui_Card.Actions {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  // NOTE: (possible debug): debugComponent(<Ui_Card.Actions {...defaultProps} ref={null} />)
})
