import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_FlagProps } from './type'
import Ui_Flag from './flag'
import React from 'react'

const defaultProps: Ui_FlagProps = {}

const selector = 'fi'

describe('@cms/core/Ui_Card.Title', () => {
  checkAccessibility([
    <Ui_Flag {...defaultProps} ref={null}>
      Test
    </Ui_Flag>,
  ])
  itSupportsSystemProps({
    component: Ui_Flag,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Ui_Flag {...defaultProps} ref={null}>
        Title
      </Ui_Flag>
    )
    expect(container).toMatchSnapshot()
  })
  // NOTE: (possible debug): debugComponent(<Ui_Card.Title {...defaultProps} ref={null} />)

  it('renders default class', () => {
    const { container: available } = render(<Ui_Flag {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.${selector}`)).toHaveLength(1)
  })
})
