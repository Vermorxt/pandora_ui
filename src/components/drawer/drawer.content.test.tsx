import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_DrawerProps } from './type'
import { Ui_Drawer } from './drawer'
import React from 'react'

const defaultProps: Ui_DrawerProps = {}

const selector = 'drawer-content'
describe('@cms/core/Ui_Drawer.Content', () => {
  checkAccessibility([
    <Ui_Drawer.Content {...defaultProps} ref={null}>
      Test
    </Ui_Drawer.Content>,
  ])
  itSupportsSystemProps({
    component: Ui_Drawer,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Ui_Drawer.Content {...defaultProps} ref={null}>
        Test
      </Ui_Drawer.Content>
    )
    expect(container).toMatchSnapshot()
  })
  // NOTE: (possible debug): debugComponent(<Ui_Card.Title {...defaultProps} ref={null} />)

  it('renders default class', () => {
    const { container: available } = render(<Ui_Drawer.Content {...defaultProps} ref={null} />)

    expect(available.querySelectorAll(`.${selector}`)).toHaveLength(1)
  })
})
