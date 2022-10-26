import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_MockupCodeProps } from './type'
import Ui_MockupCode from './mockup-code'
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
