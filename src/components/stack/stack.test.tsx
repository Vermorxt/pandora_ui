import '@testing-library/jest-dom'
import React, { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_StackProps } from './type'
import Ui_Stack from './Stack'

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
  { prop: { variant: 'primary' }, className: `bg-primary.text-primary-content` },
  { prop: { variant: 'secondary' }, className: `bg-secondary.text-secondary-content` },
  { prop: { variant: 'accent' }, className: `bg-accent.text-accent-content` },
  { prop: { variant: 'info' }, className: `bg-info.text-info-content` },
  { prop: { variant: 'success' }, className: `bg-success.text-success-content` },
  { prop: { variant: 'warning' }, className: `bg-warning.text-warning-content` },
  { prop: { variant: 'error' }, className: `bg-error.text-error-content` },
  { prop: { variant: 'neutral' }, className: `bg-neutral.text-neutral-content` },
  { prop: { variant: 'ghost' }, className: `bg-ghost.text-ghost-content` },
  { prop: { variant: 'link' }, className: `bg-link.text-link-content` },
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
