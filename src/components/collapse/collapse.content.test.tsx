import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_CollapseProps } from './type'
import Ui_Collapse from './collapse'
import React from 'react'

const defaultProps: Ui_CollapseProps = {}

describe('@cms/core/Ui_Collapse.Content', () => {
  checkAccessibility([
    <Ui_Collapse.Content {...defaultProps} ref={null}>
      Test
    </Ui_Collapse.Content>,
  ])
  itSupportsSystemProps({
    component: Ui_Collapse.Content,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Collapse.Content {...defaultProps} ref={null} />)

  it('should match snapshot', () => {
    const { container } = render(<Ui_Collapse.Content {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders COLLAPSE_CONTENT default class', () => {
    const { container: available } = render(<Ui_Collapse.Content {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.collapse-content`)).toHaveLength(1)
  })

  it('renders COLOR classes', async () => {
    const color_primary = 'primary'
    const color_secondary = 'secondary'
    const color_neutral = 'neutral'

    await itHasCssClass(
      <Ui_Collapse.Content bgColor={color_primary} />,
      `.bg-${color_primary}.text-${color_primary}-content`
    )
    await itHasCssClass(
      <Ui_Collapse.Content bgColor={color_secondary} />,
      `.bg-${color_secondary}.text-${color_secondary}-content`
    )
    await itHasCssClass(
      <Ui_Collapse.Content bgColor={color_neutral} />,
      `.bg-${color_neutral}.text-${color_neutral}-content`
    )
  })
})
