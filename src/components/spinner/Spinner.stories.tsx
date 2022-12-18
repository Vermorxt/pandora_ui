import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Spinner from './Spinner'
import { Ui_SpinnerProps } from './Spinner'

export default {
  title: 'Spinner',
  component: Ui_Spinner,
  argTypes: {
    strokeWidth: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    size: {
      options: ['large', 'medium', 'small', 'mini'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Spinner>

const Template = ({ ...rest }: Ui_SpinnerProps) => {
  return <Ui_Spinner {...rest} />
}

export const Basic = Template.bind({})
