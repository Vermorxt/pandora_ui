import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_InputProps } from './type'
import Ui_Input from './Input'
import React from 'react'

const componentName = Ui_Input
const selector = 'input'
const refType = HTMLElement
const defaultProps: Ui_InputProps = {}

const component = (
  <Ui_Input {...defaultProps} ref={null}>
    Test
  </Ui_Input>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends Ui_InputProps, SpecialProps {
  className: string
  prop?: Ui_InputProps
}

const sizeProps: SpecialPropsMerged[] = [
  { size: 'large', className: `${selector}-lg` },
  { size: 'medium', className: `${selector}-md` },
  { size: 'small', className: `${selector}-sm` },
  { size: 'mini', className: `${selector}-xs` },
  { size: 'tiny', className: `${selector}-xxs` },
]

const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { loading: true }, className: `${selector}-loading` },
  { prop: { checked: true }, className: `${selector}-checked` },
  { prop: { indeterminate: true }, className: `${selector}-indeterminate` },
  { prop: { labelPosition: 'top' }, className: `${selector}-labelPosition` },
]

const componentProps = [...componentPropsDefault, , ...sizeProps]

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
