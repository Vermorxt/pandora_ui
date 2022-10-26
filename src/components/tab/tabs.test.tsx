import '@testing-library/jest-dom'
import React, { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_TabProps } from './type'
import Ui_Tabs from './tabs'

const componentName = Ui_Tabs
const selector = 'tabs'
const refType = HTMLElement
const defaultProps: Ui_TabProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_TabProps
}

const component = (<Ui_Tabs {...defaultProps} ref={null}></Ui_Tabs>) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsDefault: SpecialPropsMerged[] = [{ prop: { boxed: true }, className: `${selector}-boxed` }]

const componentProps = [...componentPropsDefault]

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
