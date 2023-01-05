import '@testing-library/jest-dom'
import React, { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_BottomNavigationProps } from './type'
import Ui_BottomNavigation from './BottomNavigation'

const componentName = Ui_BottomNavigation
const selector = 'btm-nav'
const refType = HTMLElement
const defaultProps: Ui_BottomNavigationProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_BottomNavigationProps
}

const component = (<Ui_BottomNavigation {...defaultProps} ref={null} />) as unknown as FC<{}>

const testName = `@cms/core/${componentName}`

const componentPropsSize: SpecialPropsMerged[] = [
  { prop: { size: 'large' }, className: `${selector}-lg` },
  { prop: { size: 'medium' }, className: `${selector}-md` },
  { prop: { size: 'small' }, className: `${selector}-sm` },
  { prop: { size: 'mini' }, className: `${selector}-xs` },
  { prop: { size: 'tiny' }, className: `${selector}-xxs` },
]

const componentProps = [...componentPropsSize]

const testConfig = {
  testName,
  componentName,
  component,
  selector,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)
