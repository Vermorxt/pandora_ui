import '@testing-library/jest-dom'
import React, { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_TooltipProps } from './type'
import Ui_Tooltip from './Tooltip'

const componentName = Ui_Tooltip
const selector = 'tooltip'
const refType = HTMLElement
const defaultProps: Ui_TooltipProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_TooltipProps
}

const component = (
  <Ui_Tooltip {...defaultProps} ref={null}>
    Test
  </Ui_Tooltip>
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
  { prop: { position: 'top' }, className: `${selector}-top` },
  { prop: { position: 'left' }, className: `${selector}-left` },
  { prop: { position: 'bottom' }, className: `${selector}-bottom` },
  { prop: { position: 'right' }, className: `${selector}-right` },
  { prop: { open: true }, className: `${selector}-open` },
]

const componentProps = [...componentPropsSize, ...componentPropsDefault]

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
