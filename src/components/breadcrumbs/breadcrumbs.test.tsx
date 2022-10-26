import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_BreadcrumbsProps } from './type'
import Ui_Breadcrumbs from './breadcrumbs'
import React from 'react'
import { itHasCssClass } from '../../_tests-utils/it-has-color-css-class'

const defaultProps: Ui_BreadcrumbsProps = {}

const selector = 'text'

describe('@cms/core/Ui_Breadcrumbs', () => {
  itRendersChildren(Ui_Breadcrumbs, defaultProps as any)
  checkAccessibility([<Ui_Breadcrumbs {...defaultProps} ref={null} />])
  itSupportsSystemProps({
    component: Ui_Breadcrumbs,
    props: defaultProps,
    refType: HTMLDivElement,
  })

  // NOTE: (possible debug): debugComponent(<Ui_Breadcrumbs {...defaultProps} ref={null} />)

  it('should create snapshot', () => {
    const { container } = render(<Ui_Breadcrumbs {...defaultProps} ref={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders SIZE classes', async () => {
    await itHasCssClass(<Ui_Breadcrumbs large />, `.${selector}-lg`)
    await itHasCssClass(<Ui_Breadcrumbs medium />, `.${selector}-md`)
    await itHasCssClass(<Ui_Breadcrumbs small />, `.${selector}-sm`)
    await itHasCssClass(<Ui_Breadcrumbs tiny />, `.${selector}-xs`)
    await itHasCssClass(<Ui_Breadcrumbs mini />, `.${selector}-xxs`)
  })
})
