import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_FooterProps } from './type'
import Ui_Footer from './footer'
import React from 'react'

const componentName = Ui_Footer
const selector = 'footer'
const refType = HTMLElement
const defaultProps: Ui_FooterProps = {}

const component = (
  <Ui_Footer {...defaultProps} ref={null}>
    Test
  </Ui_Footer>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends Ui_FooterProps, SpecialProps {
  className: string
  prop: Ui_FooterProps
}

const componentProps: SpecialPropsMerged[] = [
  { prop: { shadow: true }, className: `shadow-xl` },
  { prop: { rounded: true }, className: `rounded-box` },
  { prop: { bgColor: 'primary' }, className: `bg-${'primary'}.text-${'primary'}-content` },
  { prop: { center: true }, className: `footer-center` },
  { prop: { itemsCenter: true }, className: `items-center` },
]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  selector,
} as TestGeneratorProps

testGenerator(testConfig)
