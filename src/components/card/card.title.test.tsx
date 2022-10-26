import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_CardProps } from './type'
import Ui_Card from './card'
import React from 'react'
const defaultProps: Ui_CardProps = {}

describe('@cms/core/Ui_Card.Title', () => {
  checkAccessibility([
    <Ui_Card.Title {...defaultProps} ref={null}>
      Test
    </Ui_Card.Title>,
  ])
  itSupportsSystemProps({
    component: Ui_Card.Title,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Ui_Card.Title {...defaultProps} ref={null}>
        Title
      </Ui_Card.Title>
    )
    expect(container).toMatchSnapshot()
  })
  // NOTE: (possible debug): debugComponent(<Ui_Card.Title {...defaultProps} ref={null} />)
})
