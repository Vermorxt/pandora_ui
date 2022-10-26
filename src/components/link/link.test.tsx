import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_LinkProps } from './type'
import Ui_Link from './link'
import React from 'react'

const componentName = Ui_Link
const selector = 'text'
const componentSelector = 'link'
const refType = HTMLElement
const defaultProps: Ui_LinkProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_LinkProps
}

const component = (
  <Ui_Link {...defaultProps} ref={null}>
    Test
  </Ui_Link>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsColors: SpecialPropsMerged[] = [
  { prop: { primary: true }, className: `${selector}-primary` },
  { prop: { secondary: true }, className: `${selector}-secondary` },
  { prop: { accent: true }, className: `${selector}-accent` },
  { prop: { info: true }, className: `${selector}-info` },
  { prop: { success: true }, className: `${selector}-success` },
  { prop: { warning: true }, className: `${selector}-warning` },
  { prop: { error: true }, className: `${selector}-error` },
  { prop: { neutral: true }, className: `${selector}-neutral` },
  { prop: { ghost: true }, className: `${selector}-ghost` },
  { prop: { link: true }, className: `${selector}-link` },
]

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { large: true }, className: `${selector}-lg` },
  { prop: { medium: true }, className: `${selector}-md` },
  { prop: { small: true }, className: `${selector}-sm` },
  { prop: { tiny: true }, className: `${selector}-xs` },
  { prop: { mini: true }, className: `${selector}-xxs` },
]

const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { outline: true }, className: `${selector}-outline` },
  { prop: { active: true }, className: `${selector}-active` },
  { prop: { disabled: true }, className: `${selector}-disabled` },
  { prop: { glass: true }, className: `${selector}-glass` },
  { prop: { hover: true }, className: `link-hover` },
]

const componentProps = [...componentPropsColors, ...componentPropsSize, ...componentPropsDefault]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  selector: componentSelector,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)
