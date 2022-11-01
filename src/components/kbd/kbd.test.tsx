import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_KbdProps } from './type'
import Ui_Kbd from './Kbd'
import React from 'react'

const componentName = Ui_Kbd
const selector = 'kbd'
const refType = HTMLElement
const defaultProps: Ui_KbdProps = {}

interface SpecialPropsMerged extends SpecialProps {
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
  { prop: { variant: 'primary' }, className: `${selector}-primary` },
  { prop: { variant: 'secondary' }, className: `${selector}-secondary` },
  { prop: { variant: 'accent' }, className: `${selector}-accent` },
  { prop: { variant: 'info' }, className: `${selector}-info` },
  { prop: { variant: 'success' }, className: `${selector}-success` },
  { prop: { variant: 'warning' }, className: `${selector}-warning` },
  { prop: { variant: 'error' }, className: `${selector}-error` },
  { prop: { variant: 'neutral' }, className: `${selector}-neutral` },
  { prop: { variant: 'ghost' }, className: `${selector}-ghost` },
  { prop: { variant: 'link' }, className: `${selector}-link` },
]

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { large: true }, className: `${selector}-lg` },
  { prop: { medium: true }, className: `${selector}-md` },
  { prop: { small: true }, className: `${selector}-sm` },
  { prop: { tiny: true }, className: `${selector}-xs` },
  { prop: { mini: true }, className: `${selector}-xxs` },
]

const componentProps = [...componentPropsSize]

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
