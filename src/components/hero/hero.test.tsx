import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_HeroProps } from './type'
import Ui_Hero from './hero'
import React from 'react'

const componentName = Ui_Hero
const selector = 'hero'
const refType = HTMLElement
const defaultProps: Ui_HeroProps = {}

const component = (
  <Ui_Hero {...defaultProps} ref={null}>
    Test
  </Ui_Hero>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_HeroProps
}

const componentProps: SpecialPropsMerged[] = [
  { prop: { minHeightScreen: true }, className: `min-h-screen` },
  { prop: { shadow: true }, className: `shadow-xl` },
  { prop: { rounded: true }, className: `rounded-box` },
  { prop: { bgColor: 'primary' }, className: `bg-${'primary'}.text-${'primary'}-content` },
  { prop: { center: true }, className: `${selector}-center` },
  { prop: { itemsCenter: true }, className: `items-center` },
]

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
