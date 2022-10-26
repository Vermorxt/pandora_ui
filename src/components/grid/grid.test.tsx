import '@testing-library/jest-dom'
import { FC } from 'react'
import { Ui_GridProps } from './type'
import Ui_Grid from './grid'
import React from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'

const componentName = Ui_Grid
const selector = 'grid'
const refType = HTMLElement
const defaultProps: Ui_GridProps = {}

const component = (
  <Ui_Grid {...defaultProps} ref={null}>
    Test
  </Ui_Grid>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends Ui_GridProps, SpecialProps {
  className: string
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
