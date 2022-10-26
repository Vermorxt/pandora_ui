import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_DividerProps } from './type'
import Ui_Divider from './divider'
import React from 'react'

const defaultProps: Ui_DividerProps = {}

const selector = 'divider'

interface SpecialPropsMerged extends Ui_DividerProps, SpecialProps {
  className: string
}
const specialProps: SpecialPropsMerged[] = [
  {
    horizontal: true,
    className: `${selector}-horizontal`,
  },
]

const testConfig = {
  testName: '@cms/core/Ui_Divider',
  componentName: Ui_Divider,
  component: (<Ui_Divider {...defaultProps} ref={null} />) as unknown as FC<{}>,
  colorAttributes: [],
  sizeAttributes: [],
  defaultProps: defaultProps,
  specialProps: specialProps as unknown as SpecialProps[],
  selector: selector,
  refType: HTMLDivElement,
} as TestGeneratorProps

testGenerator(testConfig)
