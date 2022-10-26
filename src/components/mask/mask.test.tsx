import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { SkipTests, testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_MaskProps } from './type'
import Ui_Mask from './mask'
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
  { prop: { squircle: true }, className: `${selector}-squircle` },
  { prop: { triangle: true }, className: `${selector}-triangle` },
  { prop: { triangle2: true }, className: `${selector}-triangle-2` },
  { prop: { triangle3: true }, className: `${selector}-triangle-3` },
  { prop: { triangle4: true }, className: `${selector}-triangle-4` },
  { prop: { heart: true }, className: `${selector}-heart` },
  { prop: { hexagon: true }, className: `${selector}-hexagon` },
  { prop: { hexagon2: true }, className: `${selector}-hexagon-2` },
  { prop: { decagon: true }, className: `${selector}-decagon` },
  { prop: { pentagon: true }, className: `${selector}-pentagon` },
  { prop: { diamond: true }, className: `${selector}-diamond` },
  { prop: { square: true }, className: `${selector}-square` },
  { prop: { circle: true }, className: `${selector}-circle` },
  { prop: { parallelogram: true }, className: `${selector}-parallelogram` },
  { prop: { parallelogram2: true }, className: `${selector}-parallelogram-2` },
  { prop: { parallelogram3: true }, className: `${selector}-parallelogram-3` },
  { prop: { parallelogram4: true }, className: `${selector}-parallelogram-4` },
  { prop: { star: true }, className: `${selector}-star` },
  { prop: { star2: true }, className: `${selector}-star-2` },
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
