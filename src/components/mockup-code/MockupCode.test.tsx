import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_MockupCodeProps } from './type'
import Ui_MockupCode from './MockupCode'
import React from 'react'

const componentName = Ui_MockupCode
const componentSelector = 'mockup-code'
const refType = HTMLDivElement
const defaultProps: Ui_MockupCodeProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_MockupCodeProps
}

const component = (
  <Ui_MockupCode {...defaultProps} ref={null}>
    Test
  </Ui_MockupCode>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { rounded: true }, className: `rounded-box` },
  { prop: { bgColor: '100' }, className: `bg-100.text-100-content` },
]

const componentPropsShadow: SpecialPropsMerged[] = [
  { prop: { shadow: true }, className: `shadow-xl` },
  { prop: { shadow: 'sm' }, className: `shadow-sm` },
  { prop: { shadow: 'lg' }, className: `shadow-lg` },
  { prop: { shadow: 'xl' }, className: `shadow-xl` },
  { prop: { shadow: '2xl' }, className: `shadow-2xl` },
  { prop: { shadow: 'md' }, className: `shadow-md` },
  { prop: { shadow: 'none' }, className: `shadow-none` },
]

const componentProps = [...componentPropsDefault, ...componentPropsShadow]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  selector: componentSelector,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)

import { render, fireEvent } from '@testing-library/react'

describe('Ui_MockupCode', () => {
  it('should render a div with the mockup-code class', () => {
    const { container } = render(<Ui_MockupCode>Test</Ui_MockupCode>)

    expect(container.firstChild).toHaveClass('mockup-code')
  })

  it('should render a div with the specified class name', () => {
    const { container } = render(<Ui_MockupCode className="test-class">Test</Ui_MockupCode>)

    expect(container.firstChild).toHaveClass('test-class')
  })

  it('should render a div with the specified size class', () => {
    const { container } = render(<Ui_MockupCode size="large">Test</Ui_MockupCode>)

    expect(container.firstChild).toHaveClass('mockup-code-lg')
  })

  it('should render a div with the specified background color class', () => {
    const { container } = render(<Ui_MockupCode bgColor="blue">Test</Ui_MockupCode>)

    expect(container.firstChild).toHaveClass('bg-blue')
  })

  it('should render a div with the specified shadow class', () => {
    const { container } = render(<Ui_MockupCode shadow="xl">Test</Ui_MockupCode>)

    expect(container.firstChild).toHaveClass('shadow-xl')
  })

  it('should render a div with the specified rounded class', () => {
    const { container } = render(<Ui_MockupCode rounded="circle">Test</Ui_MockupCode>)

    expect(container.firstChild).toHaveClass('rounded-circle')
  })
})
