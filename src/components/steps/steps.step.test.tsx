import '@testing-library/jest-dom'
import React, { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_StepsProps } from './type'
import Ui_Steps from './steps'

const componentName = Ui_Steps.Step
const selector = 'step'
const refType = HTMLElement
const defaultProps: Ui_StepsProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_StepsProps
}

const component = (
  <Ui_Steps>
    <Ui_Steps.Step {...defaultProps} ref={null} dataContent="x">
      Test
    </Ui_Steps.Step>
  </Ui_Steps>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsColors: SpecialPropsMerged[] = []

const componentPropsDefault: SpecialPropsMerged[] = []

const componentProps = [...componentPropsColors, ...componentPropsDefault]

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
