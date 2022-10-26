import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { SkipTests, testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_SwapProps } from './type'
import Ui_Swap from './swap'
import React from 'react'

const componentName = Ui_Swap
const selector = 'swap'
const refType = HTMLLabelElement
const defaultProps: Ui_SwapProps = {}
const skipTests = [SkipTests.SkipChildren]

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_SwapProps
}

const component = (<Ui_Swap {...defaultProps} ref={null} />) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { swapRotate: true }, className: `${selector}-rotate` },
  { prop: { swapFlip: true }, className: `${selector}-flip` },
  { prop: { swapActive: 'on' }, className: `${selector}-active` },
  { prop: { swapActive: 'off' }, className: `${selector}-active` },
]

const componentProps = [...componentPropsDefault]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  selector,
  refType,
  skipTests,
} as TestGeneratorProps

testGenerator(testConfig)
