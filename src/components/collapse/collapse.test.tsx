import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CollapseProps } from './type'
import Ui_Collapse from './collapse'
import React from 'react'

const defaultProps: Ui_CollapseProps = {}

const selector = 'collapse'

describe('@cms/core/Ui_Collapse', () => {
  checkAccessibility([
    <label>
      <Ui_Collapse {...defaultProps} label="test" ref={null}>
        Test
      </Ui_Collapse>
    </label>,
  ])
  itSupportsSystemProps({
    component: Ui_Collapse,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Collapse {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Collapse {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders STYLE classes', async () => {
    await itHasCssClass(<Ui_Collapse border />, `.border.border-base-300.bg-base-100`)
    await itHasCssClass(<Ui_Collapse arrow />, `.${selector}-arrow`)
    await itHasCssClass(<Ui_Collapse plus />, `.${selector}-plus`)
    await itHasCssClass(<Ui_Collapse open />, `.${selector}-open`)
    await itHasCssClass(<Ui_Collapse close />, `.${selector}-close`)
    await itHasCssClass(<Ui_Collapse group />, `.group`)
    await itHasCssClass(<Ui_Collapse rounded />, `.rounded-box`)
  })
})
