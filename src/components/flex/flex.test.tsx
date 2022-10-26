import '@testing-library/jest-dom'
import { FC } from 'react'
import { Ui_FlexProps } from './type'
import { Ui_Flex } from './flex'
import React from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'

const componentName = Ui_Flex
const selector = 'ui_flex'
const refType = HTMLDivElement
const defaultProps: Ui_FlexProps = {}

const component = (
  <Ui_Flex {...defaultProps} ref={null}>
    Test
  </Ui_Flex>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop: Ui_FlexProps
}

const componentProps: SpecialPropsMerged[] = []

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
