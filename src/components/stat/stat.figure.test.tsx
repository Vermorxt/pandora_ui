import '@testing-library/jest-dom'
import { FC } from 'react'
import { Ui_StatProps } from './type'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import Ui_Stat from './Stat'
import React from 'react'

const componentName = Ui_Stat.Figure
const selector = 'stat-figure'
const refType = HTMLElement
const defaultProps: Ui_StatProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_StatProps
}

const component = (
  <Ui_Stat.Figure {...defaultProps} ref={null}>
    Test
  </Ui_Stat.Figure>
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
