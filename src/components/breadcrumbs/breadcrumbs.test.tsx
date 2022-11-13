import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '../../_tests-utils'
import { Ui_BreadcrumbsProps } from './type'
import Ui_Breadcrumbs from './Breadcrumbs'
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
    await itHasCssClass(<Ui_Breadcrumbs size="large" />, `.${selector}-lg`)
    await itHasCssClass(<Ui_Breadcrumbs size="medium" />, `.${selector}-md`)
    await itHasCssClass(<Ui_Breadcrumbs size="small" />, `.${selector}-sm`)
    await itHasCssClass(<Ui_Breadcrumbs size="mini" />, `.${selector}-xs`)
    await itHasCssClass(<Ui_Breadcrumbs size="tiny" />, `.${selector}-xxs`)
  })
})
