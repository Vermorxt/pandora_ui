import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_MenuProps } from './type'
import Ui_Menu from './menu'
import React from 'react'

const componentName = Ui_Menu
const selector = 'text'
const componentSelector = 'menu'
const refType = HTMLElement
const defaultProps: Ui_MenuProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_MenuProps
}

const component = (
  <Ui_Menu {...defaultProps} ref={null}>
    <li>Test</li>
  </Ui_Menu>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { large: true }, className: `${selector}-lg` },
  { prop: { medium: true }, className: `${selector}-md` },
  { prop: { small: true }, className: `${selector}-sm` },
  { prop: { tiny: true }, className: `${selector}-xs` },
  { prop: { mini: true }, className: `${selector}-xxs` },
]
const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { hover: true }, className: `${componentSelector}-hover` },
  { prop: { horizontal: true }, className: `${componentSelector}-horizontal` },
  { prop: { rounded: true }, className: `rounded-box` },
  { prop: { bgColor: '100' }, className: `bg-100.text-100-content` },
]

const componentPropsShadow: SpecialPropsMerged[] = [
  { prop: { shadow: true }, className: `shadow-xl` },
  { prop: { shadow: 'sm' }, className: `shadow-sm` },
  { prop: { shadow: 'lg' }, className: `shadow-lg` },
  { prop: { shadow: 'xl' }, className: `shadow-xl` },
  { prop: { shadow: '2xl' }, className: `shadow-2xl` },
  { prop: { shadow: 'md' }, className: `shadow-md` },
  { prop: { shadow: 'none' }, className: `shadow-none` },
]

const componentProps = [...componentPropsSize, ...componentPropsDefault, ...componentPropsShadow]

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
