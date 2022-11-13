import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Badge from './Badge'
import { Ui_BadgeProps } from './type'

export default {
  title: 'Badge',
  component: Ui_Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
    },
    outline: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Ui_Badge>

const Template = ({ ...rest }: Ui_BadgeProps) => {
  return (
    <Ui_Badge {...rest} ref={null}>
      <span>Badge component.</span>
    </Ui_Badge>
  )
}

export const Basic = Template.bind({})
