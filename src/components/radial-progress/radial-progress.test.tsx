import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_RadialProgressProps } from './type'
import Ui_RadialProgress from './radial-progress'
import React from 'react'

const componentName = Ui_RadialProgress
const selector = 'progress'
const componentSelector = 'radial-progress'
const refType = HTMLDivElement
const defaultProps: Ui_RadialProgressProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_RadialProgressProps
}

const component = (
  <Ui_RadialProgress {...defaultProps} ref={null}>
    Test
  </Ui_RadialProgress>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { large: true }, className: `${selector}-lg` },
  { prop: { medium: true }, className: `${selector}-md` },
  { prop: { small: true }, className: `${selector}-sm` },
  { prop: { tiny: true }, className: `${selector}-xs` },
  { prop: { mini: true }, className: `${selector}-xxs` },
  { prop: { block: true }, className: `${selector}-block` },
  { prop: { wide: true }, className: `${selector}-wide` },
  { prop: { circle: true }, className: `${selector}-circle` },
  { prop: { square: true }, className: `${selector}-square` },
]
const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { loading: true }, className: `loading` },
  { prop: { outline: true }, className: `${selector}-outline` },
  { prop: { active: true }, className: `${selector}-active` },
  { prop: { disabled: true }, className: `${selector}-disabled` },
  { prop: { glass: true }, className: `${selector}-glass` },
]

const componentProps = [...componentPropsSize, ...componentPropsDefault]

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
