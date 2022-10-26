import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_IndicatorProps } from './type'
import Ui_Indicator from './indicator'
import React from 'react'

const componentName = Ui_Indicator
const selector = 'indicator'
const refType = HTMLElement
const defaultProps: Ui_IndicatorProps = {}

const component = (
  <Ui_Indicator {...defaultProps} ref={null}>
    Test
  </Ui_Indicator>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_IndicatorProps
}

const componentProps: SpecialPropsMerged[] = [
  { prop: { shadow: true }, className: `shadow-xl` },
  { prop: { rounded: true }, className: `rounded-box` },
  { prop: { bgColor: 'primary' }, className: `bg-${'primary'}.text-${'primary'}-content` },
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
