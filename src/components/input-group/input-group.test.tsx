import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_InputGroupProps } from './type'
import Ui_InputGroup from './input-group'
import React from 'react'

const componentName = Ui_InputGroup
const selector = 'input-group'
const refType = HTMLElement
const defaultProps: Ui_InputGroupProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_InputGroupProps
}

const component = (
  <Ui_InputGroup {...defaultProps} ref={null}>
    Test
  </Ui_InputGroup>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { large: true }, className: `${selector}-lg` },
  { prop: { medium: true }, className: `${selector}-md` },
  { prop: { small: true }, className: `${selector}-sm` },
  { prop: { tiny: true }, className: `${selector}-xs` },
  { prop: { mini: true }, className: `${selector}-xxs` },
]

const componentPropsDefault: SpecialPropsMerged[] = [{ prop: { vertical: true }, className: `input-group-vertical` }]

const componentProps = [...componentPropsSize, ...componentPropsDefault]

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
