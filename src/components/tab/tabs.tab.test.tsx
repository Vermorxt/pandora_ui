import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_TabProps } from './type'
import Ui_Tabs from './Tabs'
import React from 'react'

const componentName = Ui_Tabs.Tab
const selector = 'tab'
const refType = HTMLElement
const defaultProps: Ui_TabProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_TabProps
}

const component = (
  <Ui_Tabs>
    <Ui_Tabs.Tab {...defaultProps} ref={null} dataContent="x">
      Test
    </Ui_Tabs.Tab>
  </Ui_Tabs>
) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { active: true }, className: `${selector}-active` },
  { prop: { bordered: true }, className: `${selector}-bordered` },
  { prop: { lifted: true }, className: `${selector}-lifted` },
]

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { size: 'large' }, className: `${selector}-lg` },
  { prop: { size: 'medium' }, className: `${selector}-md` },
  { prop: { size: 'small' }, className: `${selector}-sm` },
  { prop: { size: 'mini' }, className: `${selector}-xs` },
  { prop: { size: 'tiny' }, className: `${selector}-xxs` },
]

const componentProps = [...componentPropsDefault, ...componentPropsSize]

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
