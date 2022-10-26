import '@testing-library/jest-dom'
import React, { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_StepsProps } from './type'
import Ui_Steps from './steps'

const componentName = Ui_Steps
const selector = 'steps'
const refType = HTMLElement
const defaultProps: Ui_StepsProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_StepsProps
}

const component = (
  <Ui_Steps {...defaultProps} ref={null}>
    <li>Test</li>
  </Ui_Steps>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsColors: SpecialPropsMerged[] = [
  { prop: { bgColor: 'primary' }, className: `bg-primary.text-primary-content` },
  { prop: { bgColor: 'secondary' }, className: `bg-secondary.text-secondary-content` },
  { prop: { bgColor: 'accent' }, className: `bg-accent.text-accent-content` },
  { prop: { bgColor: 'info' }, className: `bg-info.text-info-content` },
  { prop: { bgColor: 'success' }, className: `bg-success.text-success-content` },
  { prop: { bgColor: 'warning' }, className: `bg-warning.text-warning-content` },
  { prop: { bgColor: 'error' }, className: `bg-error.text-error-content` },
  { prop: { bgColor: 'neutral' }, className: `bg-neutral.text-neutral-content` },
  { prop: { bgColor: 'ghost' }, className: `bg-ghost.text-ghost-content` },
  { prop: { bgColor: 'link' }, className: `bg-link.text-link-content` },
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

const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { vertical: true }, className: `${selector}-vertical` },
  { prop: { rounded: true }, className: `rounded-box` },
  { prop: { itemsCenter: true }, className: `items-center` },
]

const componentProps = [...componentPropsColors, ...componentPropsShadow, ...componentPropsDefault]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  selector,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)
