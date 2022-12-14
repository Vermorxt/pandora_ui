import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { SkipTests, testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_RadioProps } from './type'
import Ui_Radio from './Radio'
import React from 'react'

const componentName = Ui_Radio
const selector = 'radio'
const componentSelector = ''
const refType = HTMLDivElement
const defaultProps: Ui_RadioProps = {}
const skipTests = [SkipTests.SkipChildren]

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_RadioProps
}

const component = (
  <label>
    <Ui_Radio {...defaultProps} ref={null} onChange={() => null}>
      Test
    </Ui_Radio>
  </label>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { size: 'large' }, className: `${selector}-lg` },
  { prop: { size: 'medium' }, className: `${selector}-md` },
  { prop: { size: 'small' }, className: `${selector}-sm` },
  { prop: { size: 'mini' }, className: `${selector}-xs` },
  { prop: { size: 'tiny' }, className: `${selector}-xxs` },
]
const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { loading: true }, className: `loading` },
  { prop: { disabled: true }, className: `${selector}-disabled` },
  { prop: { checked: true }, className: `${selector}-checked` },
]

const componentProps = [...componentPropsSize, ...componentPropsDefault]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  skipTests,
  selector: componentSelector,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)
