import '@testing-library/jest-dom'
import { FC } from 'react'
import { Ui_StatProps } from './type'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import Ui_Stat from './stat'
import React from 'react'

const componentName = Ui_Stat.Value
const selector = 'stat-value'
const refType = HTMLElement
const defaultProps: Ui_StatProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_StatProps
}

const component = (
  <Ui_Stat.Value {...defaultProps} ref={null}>
    Test
  </Ui_Stat.Value>
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

const componentPropsBgColors: SpecialPropsMerged[] = [
  { prop: { bgColor: 'primary' }, className: `bg-primary.text-primary-content` },
  { prop: { bgColor: 'secondary' }, className: `bg-secondary.text-secondary-content` },
  { prop: { textColor: 'primary' }, className: `text-primary` },
  { prop: { textColor: 'secondary' }, className: `text-secondary` },
]

const componentPropsDefault: SpecialPropsMerged[] = []

const componentProps = [...componentPropsColors, ...componentPropsBgColors, ...componentPropsDefault]

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
