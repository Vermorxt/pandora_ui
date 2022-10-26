import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_KbdProps } from './type'
import Ui_Kbd from './kbd'
import React from 'react'

const componentName = Ui_Kbd
const selector = 'kbd'
const refType = HTMLElement
const defaultProps: Ui_KbdProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_KbdProps
}

const component = (
  <Ui_Kbd {...defaultProps} ref={null}>
    Test
  </Ui_Kbd>
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

const componentProps = [...componentPropsColors, ...componentPropsSize]

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
