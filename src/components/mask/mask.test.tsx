import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { SkipTests, testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_MaskProps } from './type'
import Ui_Mask from './Mask'
import React from 'react'

const componentName = Ui_Mask
const selector = 'mask'
const refType = HTMLElement
const defaultProps: Ui_MaskProps = {}
const skipTests = [SkipTests.SkipChildren]

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_MaskProps
}

const component = (
  <Ui_Mask {...defaultProps} ref={null}>
    Test
  </Ui_Mask>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsColors: SpecialPropsMerged[] = []

const componentPropsDefault: SpecialPropsMerged[] = []

const componentPropsShapes: SpecialPropsMerged[] = [
  { prop: { shape: 'squircle' }, className: `${selector}-squircle` },
  { prop: { shape: 'triangle' }, className: `${selector}-triangle` },
  { prop: { shape: 'triangle2' }, className: `${selector}-triangle-2` },
  { prop: { shape: 'triangle3' }, className: `${selector}-triangle-3` },
  { prop: { shape: 'triangle4' }, className: `${selector}-triangle-4` },
  { prop: { shape: 'heart' }, className: `${selector}-heart` },
  { prop: { shape: 'hexagon' }, className: `${selector}-hexagon` },
  { prop: { shape: 'hexagon2' }, className: `${selector}-hexagon-2` },
  { prop: { shape: 'decagon' }, className: `${selector}-decagon` },
  { prop: { shape: 'pentagon' }, className: `${selector}-pentagon` },
  { prop: { shape: 'diamond' }, className: `${selector}-diamond` },
  { prop: { shape: 'square' }, className: `${selector}-square` },
  { prop: { shape: 'circle' }, className: `${selector}-circle` },
  { prop: { shape: 'parallelogram' }, className: `${selector}-parallelogram` },
  { prop: { shape: 'parallelogram2' }, className: `${selector}-parallelogram-2` },
  { prop: { shape: 'parallelogram3' }, className: `${selector}-parallelogram-3` },
  { prop: { shape: 'parallelogram4' }, className: `${selector}-parallelogram-4` },
  { prop: { shape: 'star' }, className: `${selector}-star` },
  { prop: { shape: 'star2' }, className: `${selector}-star-2` },
]

const componentProps = [...componentPropsColors, ...componentPropsDefault, ...componentPropsShapes]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  selector,
  skipTests,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)
