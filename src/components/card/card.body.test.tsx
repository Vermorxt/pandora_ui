import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CardProps } from './type'
import Ui_Card from './card'
import React from 'react'

const defaultProps: Ui_CardProps = {}

describe('@cms/core/Ui_Card.Body', () => {
  checkAccessibility([
    <Ui_Card.Body {...defaultProps} ref={null}>
      Test
    </Ui_Card.Body>,
  ])
  itSupportsSystemProps({
    component: Ui_Card.Body,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Card.Body {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Card.Body {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders CENTER classes', async () => {
    await itHasCssClass(<Ui_Card.Body itemsCenter />, `.items-center`)
    await itHasCssClass(<Ui_Card.Body textCenter />, `.text-center`)
  })
})
