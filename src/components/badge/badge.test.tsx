import '@testing-library/jest-dom'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '../../_tests-utils'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'
import { Ui_BadgeProps } from './type'
import React from 'react'
import Ui_Badge from './Badge'

const defaultProps: Ui_BadgeProps = {}

const selector = 'badge'

describe('@cms/core/Ui_Badge', () => {
  itRendersChildren(Ui_Badge, defaultProps as any)
  checkAccessibility([<Ui_Badge {...defaultProps} ref={null} />])
  itSupportsSystemProps({
    component: Ui_Badge,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Badge {...defaultProps} ref={null} />)

  it('renders SIZE classes', async () => {
    await itHasCssClass(<Ui_Badge size="large" />, `.${selector}-lg`)
    await itHasCssClass(<Ui_Badge size="medium" />, `.${selector}-md`)
    await itHasCssClass(<Ui_Badge size="small" />, `.${selector}-sm`)
    await itHasCssClass(<Ui_Badge size="tiny" />, `.${selector}-xxs`)
    await itHasCssClass(<Ui_Badge size="mini" />, `.${selector}-xs`)
  })
})
