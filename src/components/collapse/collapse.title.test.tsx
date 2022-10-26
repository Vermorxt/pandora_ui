import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CollapseProps } from './type'
import Ui_Collapse from './collapse'
import React from 'react'

const defaultProps: Ui_CollapseProps = {}

describe('@cms/core/Ui_Collapse.Title', () => {
  checkAccessibility([
    <Ui_Collapse.Title {...defaultProps} ref={null}>
      Test
    </Ui_Collapse.Title>,
  ])
  itSupportsSystemProps({
    component: Ui_Collapse.Title,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Collapse.Title {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Collapse.Title {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders COLLAPSE_TITLE default class', () => {
    const { container: available } = render(<Ui_Collapse.Title {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.collapse-title`)).toHaveLength(1)
  })

  it('renders COLOR classes', async () => {
    const color_primary = 'primary'
    const color_secondary = 'secondary'
    const color_neutral = 'neutral'

    await itHasCssClass(
      <Ui_Collapse.Title bgColor={color_primary} />,
      `.bg-${color_primary}.text-${color_primary}-content`
    )
    await itHasCssClass(
      <Ui_Collapse.Title bgColor={color_secondary} />,
      `.bg-${color_secondary}.text-${color_secondary}-content`
    )
    await itHasCssClass(
      <Ui_Collapse.Title bgColor={color_neutral} />,
      `.bg-${color_neutral}.text-${color_neutral}-content`
    )
  })
})
