import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Collapse from './Collapse'
import { Ui_CollapseProps } from './type'

export default {
  title: 'Collapse',
  component: Ui_Collapse,
  argTypes: {
    bgColorOpened: {
      control: { type: 'text', value: ['primary', 'secondary', 'neutral'] },
    },
    colorOpened: {
      control: { type: 'text', value: ['primary', 'secondary', 'neutral'] },
    },
    border: {
      control: { type: 'boolean' },
    },
    focus: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    arrow: {
      control: { type: 'boolean' },
    },
    plus: {
      control: { type: 'boolean' },
    },
    open: {
      control: { type: 'boolean' },
    },
    defaultOpen: {
      control: { type: 'boolean' },
    },
    close: {
      control: { type: 'boolean' },
    },
    group: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Collapse>

const Template = ({ ...rest }: Ui_CollapseProps) => {
  return (
    <Ui_Collapse {...rest}>
      <Ui_Collapse.Title {...rest}>Collapse me ...</Ui_Collapse.Title>
      <Ui_Collapse.Content {...rest}>
        <p>Collapse content.</p>
      </Ui_Collapse.Content>
    </Ui_Collapse>
  )
}

export const Basic = Template.bind({})
