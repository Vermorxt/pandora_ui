import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_FooterProps } from './type'
import Ui_Footer from './footer'
import React from 'react'

const componentName = Ui_Footer.Title
const selector = 'footer-title'
const refType = HTMLDivElement
const defaultProps: Ui_FooterProps = {}

const component = (
  <Ui_Footer.Title {...defaultProps} ref={null}>
    Test
  </Ui_Footer.Title>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends Ui_FooterProps, SpecialProps {
  className: string
  prop: Ui_FooterProps
}

const componentProps: SpecialPropsMerged[] = []

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
