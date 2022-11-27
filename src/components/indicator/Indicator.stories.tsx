import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Indicator from './Indicator'
import { Ui_IndicatorProps } from './type'

export default {
  title: 'Indicator',
  component: Ui_Indicator,
  argTypes: {
    badge: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    top: {
      control: { type: 'boolean' },
    },
    bottom: {
      control: { type: 'boolean' },
    },
    middle: {
      control: { type: 'boolean' },
    },
    center: {
      control: { type: 'boolean' },
    },
    start: {
      control: { type: 'boolean' },
    },
    end: {
      control: { type: 'boolean' },
    },
    shadow: {
      control: { type: 'radio' },
      options: ['sm', 'lg', 'xl', '2xl', 'md', 'none', true],
    },
    bgColor: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
  },
} as ComponentMeta<typeof Ui_Indicator>

const Template = ({ ...rest }: Ui_IndicatorProps) => {
  return (
    <Ui_Indicator {...rest}>
      <Ui_Indicator.Item {...rest} />
      <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
    </Ui_Indicator>
  )
}

export const Basic = Template.bind({})
