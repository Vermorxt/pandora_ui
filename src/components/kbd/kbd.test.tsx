import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_KbdProps } from './type'
import React from 'react'
import { getTextClassString } from './../../_tests-utils/_utils/get-text-class-string'
import Ui_Kbd from './Kbd'
import { itHasCssClass } from './../../_tests-utils/it-has-color-css-class'

const componentName = Ui_Kbd
const selector = 'kbd'
const refType = HTMLElement
const defaultProps: Ui_KbdProps = {}

interface SpecialPropsMerged extends Ui_KbdProps, SpecialProps {
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

it('renders SIZE classes', async () => {
  await itHasCssClass(<Ui_Kbd size="large" />, '.kbd-lg')
  await itHasCssClass(<Ui_Kbd size="medium" />, '.kbd-md')
  await itHasCssClass(<Ui_Kbd size="small" />, '.kbd-sm')
  await itHasCssClass(<Ui_Kbd size="mini" />, '.kbd-xs')
  await itHasCssClass(<Ui_Kbd size="tiny" />, '.kbd-xxs')
})

const componentProps = [...[]]

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
