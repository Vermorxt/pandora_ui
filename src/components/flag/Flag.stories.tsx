import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Flag from './Flag'
import { Ui_FlagProps } from './type'

export default {
  title: 'Flag',
  component: Ui_Flag,
  args: {
    name: 'cr',
  },
  argTypes: {
    name: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Ui_Flag>

const Template = ({ ...rest }: Ui_FlagProps) => {
  return <Ui_Flag {...rest} ref={null} />
}

export const Basic = Template.bind({})
