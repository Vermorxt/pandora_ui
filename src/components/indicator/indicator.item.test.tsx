import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_IndicatorProps } from './type'
import Ui_Indicator from './indicator'
import React from 'react'

const componentName = Ui_Indicator.Item
const selectorParent = 'indicator'
const selector = 'indicator-item'
const refType = HTMLElement
const defaultProps: Ui_IndicatorProps = {}

const component = (
  <Ui_Indicator.Item {...defaultProps} ref={null}>
    Test
  </Ui_Indicator.Item>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_IndicatorProps
}

const componentProps: SpecialPropsMerged[] = [
  { prop: { badge: true }, className: `badge` },
  { prop: { start: true }, className: `${selectorParent}-start` },
  { prop: { end: true }, className: `${selectorParent}-end` },
  { prop: { middle: true }, className: `${selectorParent}-middle` },
  { prop: { top: true }, className: `${selectorParent}-top` },
  { prop: { bottom: true }, className: `${selectorParent}-bottom` },
  { prop: { center: true }, className: `${selectorParent}-center` },
]

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
