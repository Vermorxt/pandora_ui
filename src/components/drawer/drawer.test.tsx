import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_DrawerProps } from './type'
import { Ui_Drawer } from './drawer'

const defaultProps: Ui_DrawerProps = {}

const selector = 'drawer'
describe('@cms/core/Ui_Drawer', () => {
  checkAccessibility([
    <label>
      <Ui_Drawer {...defaultProps} ref={null}>
        Test
      </Ui_Drawer>
    </label>,
  ])
  itSupportsSystemProps({
    component: Ui_Drawer,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Ui_Drawer {...defaultProps} ref={null}>
        Title
      </Ui_Drawer>
    )
    expect(container).toMatchSnapshot()
  })
  // NOTE: (possible debug): debugComponent(<Ui_Card.Title {...defaultProps} ref={null} />)

  it('renders default class', () => {
    const { container: available } = render(<Ui_Drawer {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.${selector}`)).toHaveLength(1)
  })

  it('renders CSS classes', async () => {
    await itHasCssClass(<Ui_Drawer defaultOpenOnLargeScreen />, `.${selector}-mobile`)
    await itHasCssClass(<Ui_Drawer opensRight />, `.${selector}-end`)
  })
})
