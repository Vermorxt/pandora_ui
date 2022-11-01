import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-supports-special-props'
import { getTextClassString } from '../../_tests-utils/_utils/get-text-class-string'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_ButtonProps } from './type'
import Ui_Button from './Button'
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
  { variant: 'primary', className: `${selector}-primary` },
  { variant: 'secondary', className: `${selector}-secondary` },
  { variant: 'accent', className: `${selector}-accent` },
  { variant: 'info', className: `${selector}-info` },
  { variant: 'error', className: `${selector}-error` },
  { variant: 'success', className: `${selector}-success` },
  { variant: 'warning', className: `${selector}-warning` },
  { variant: 'ghost', className: `${selector}-ghost` },
  { variant: 'neutral', className: `${selector}-neutral` },
  { variant: 'link', className: `${selector}-link` },
]

const colorTextProps: SpecialPropsMerged[] = [
  { variant: 'primary', className: getTextClassString('primary') },
  { variant: 'secondary', className: getTextClassString('secondary') },
  { variant: 'accent', className: getTextClassString('accent') },
  { variant: 'info', className: getTextClassString('info') },
  { variant: 'error', className: getTextClassString('error') },
  { variant: 'success', className: getTextClassString('success') },
  { variant: 'warning', className: getTextClassString('warning') },
  { variant: 'ghost', className: getTextClassString('ghost') },
  { variant: 'neutral', className: getTextClassString('neutral') },
  { variant: 'link', className: getTextClassString('link') },
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
