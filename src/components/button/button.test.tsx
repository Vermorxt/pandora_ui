import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-supports-special-props'
import { getTextClassString } from '../../_tests-utils/_utils/get-text-class-string'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_ButtonProps } from './type'
import Ui_Button from './button'
import React from 'react'

const componentName = Ui_Button
const selector = 'btn'
const refType = HTMLButtonElement
const defaultProps: Ui_ButtonProps = {}

const component = (
  <Ui_Button {...defaultProps} ref={null}>
    Test
  </Ui_Button>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends Ui_ButtonProps, SpecialProps {
  className: string
}

const componentProps: SpecialPropsMerged[] = [
  { noAnimation: true, className: `no-animation` },
  { loading: true, className: `loading` },
  { outline: true, className: `${selector}-outline` },
  { active: true, className: `${selector}-active` },
  { disabled: true, className: `${selector}-disabled` },
  { glass: true, className: `${selector}-glass` },
]

const sizeProps: SpecialPropsMerged[] = [
  { large: true, className: `${selector}-lg` },
  { medium: true, className: `${selector}-md` },
  { small: true, className: `${selector}-sm` },
  { tiny: true, className: `${selector}-xs` },
  { mini: true, className: `${selector}-xxs` },
  { wide: true, className: `${selector}-wide` },
  { block: true, className: `${selector}-block` },
  { circle: true, className: `${selector}-circle` },
  { square: true, className: `${selector}-square` },
]

const colorProps: SpecialPropsMerged[] = [
  { primary: true, className: `${selector}-primary` },
  { secondary: true, className: `${selector}-secondary` },
  { accent: true, className: `${selector}-accent` },
  { info: true, className: `${selector}-info` },
  { error: true, className: `${selector}-error` },
  { success: true, className: `${selector}-success` },
  { warning: true, className: `${selector}-warning` },
  { ghost: true, className: `${selector}-ghost` },
  { neutral: true, className: `${selector}-neutral` },
  { link: true, className: `${selector}-link` },
]

const colorTextProps: SpecialPropsMerged[] = [
  { primary: true, className: getTextClassString('primary') },
  { secondary: true, className: getTextClassString('secondary') },
  { accent: true, className: getTextClassString('accent') },
  { info: true, className: getTextClassString('info') },
  { error: true, className: getTextClassString('error') },
  { success: true, className: getTextClassString('success') },
  { warning: true, className: getTextClassString('warning') },
  { ghost: true, className: getTextClassString('ghost') },
  { neutral: true, className: getTextClassString('neutral') },
  { link: true, className: getTextClassString('link') },
]

const specialProps = [...componentProps, ...sizeProps, ...colorProps, ...colorTextProps] as unknown as SpecialProps[]

const testConfig = {
  testName,
  componentName,
  component,
  defaultProps,
  specialProps,
  selector,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)
