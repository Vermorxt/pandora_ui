import '@testing-library/jest-dom'
import React, { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_StackProps } from './type'
import Ui_Stack from './stack'

const componentName = Ui_Stack
const selector = 'stack'
const refType = HTMLElement
const defaultProps: Ui_StackProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_StackProps
}

const component = (
  <Ui_Stack {...defaultProps} ref={null}>
    Test
  </Ui_Stack>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsColors: SpecialPropsMerged[] = [
  { prop: { primary: true }, className: `bg-primary.text-primary-content` },
  { prop: { secondary: true }, className: `bg-secondary.text-secondary-content` },
  { prop: { accent: true }, className: `bg-accent.text-accent-content` },
  { prop: { info: true }, className: `bg-info.text-info-content` },
  { prop: { success: true }, className: `bg-success.text-success-content` },
  { prop: { warning: true }, className: `bg-warning.text-warning-content` },
  { prop: { error: true }, className: `bg-error.text-error-content` },
  { prop: { neutral: true }, className: `bg-neutral.text-neutral-content` },
  { prop: { ghost: true }, className: `bg-ghost.text-ghost-content` },
  { prop: { link: true }, className: `bg-link.text-link-content` },
]

const componentProps = [...componentPropsColors]

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
