import '@testing-library/jest-dom'
import { FC } from 'react'
import { SpecialProps } from '../../_tests-utils/it-should-have-class'
import { testGenerator, TestGeneratorProps } from '../../_tests-utils/_utils/test-generator'
import { Ui_TableProps } from './type'
import Ui_Table from './Table'
import React from 'react'

const componentName = Ui_Table
const selector = 'table'
const isTable = 'table'
const refType = HTMLTableElement
const defaultProps: Ui_TableProps = {}

interface SpecialPropsMerged extends SpecialProps {
  className: string
  prop?: Ui_TableProps
}

const component = (<Ui_Table {...defaultProps} ref={null}></Ui_Table>) as unknown as FC<{}>

const testName = `@cms/core/${'table'}`

const componentPropsColors: SpecialPropsMerged[] = [
  { prop: { variant: 'primary' }, className: `bg-primary.text-primary-content` },
  { prop: { variant: 'secondary' }, className: `bg-secondary.text-secondary-content` },
  { prop: { variant: 'accent' }, className: `bg-accent.text-accent-content` },
  { prop: { variant: 'info' }, className: `bg-info.text-info-content` },
  { prop: { variant: 'success' }, className: `bg-success.text-success-content` },
  { prop: { variant: 'warning' }, className: `bg-warning.text-warning-content` },
  { prop: { variant: 'error' }, className: `bg-error.text-error-content` },
  { prop: { variant: 'neutral' }, className: `bg-neutral.text-neutral-content` },
  { prop: { variant: 'ghost' }, className: `bg-ghost.text-ghost-content` },
  { prop: { variant: 'link' }, className: `bg-link.text-link-content` },
]

const componentPropsDefault: SpecialPropsMerged[] = [
  { prop: { bgColor: 'primary' }, className: `bg-${'primary'}.text-${'primary'}-content` },
  { prop: { bgColor: 'secondary' }, className: `bg-${'secondary'}.text-${'secondary'}-content` },
  { prop: { compact: true }, className: `${selector}-compact` },
]

const componentProps = [...componentPropsColors, ...componentPropsDefault]

const testConfig = {
  testName,
  componentName,
  component,
  componentProps,
  defaultProps,
  selector,
  isTable,
  refType,
} as TestGeneratorProps

testGenerator(testConfig)
