import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Stat from './Stat'
import { Ui_StatProps } from './type'

export default {
  title: 'Stat',
  component: Ui_Stat,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    bgColor: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Ui_Stat>

const Template = ({ ...rest }: Ui_StatProps) => {
  return (
    <Ui_Stat {...rest} ref={null}>
      <Ui_Stat.Item>
        <Ui_Stat.Title>Total Page Views</Ui_Stat.Title>
        <Ui_Stat.Value>89,400</Ui_Stat.Value>
        <Ui_Stat.Description>21% more than last month</Ui_Stat.Description>
      </Ui_Stat.Item>
    </Ui_Stat>
  )
}

export const Basic = Template.bind({})
