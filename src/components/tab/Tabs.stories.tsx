import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Tabs from './Tabs'
import { Ui_TabProps } from './type'

export default {
  title: 'Tabs',
  component: Ui_Tabs,
  argTypes: {
    active: {
      control: { type: 'boolean' },
    },
    bordered: {
      control: { type: 'boolean' },
    },
    lifted: {
      control: { type: 'boolean' },
    },
    boxed: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Tabs>

const Template = ({ ...rest }: Ui_TabProps) => {
  return (
    <Ui_Tabs {...rest}>
      <Ui_Tabs.Tab>Tab 1</Ui_Tabs.Tab>
      <Ui_Tabs.Tab {...rest}>Tab 2</Ui_Tabs.Tab>
      <Ui_Tabs.Tab>Tab 3</Ui_Tabs.Tab>
    </Ui_Tabs>
  )
}

export const Basic = Template.bind({})
