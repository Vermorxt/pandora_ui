import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Select from './Select'
import { Ui_SelectProps } from './type'

const options = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

export default {
  title: 'Select',
  component: Ui_Select,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    size: {
      options: ['large', 'medium', 'small', 'mini'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Select>

const Template = ({ ...rest }: Ui_SelectProps) => {
  return <Ui_Select {...rest} ref={null} options={options} style={{ margin: '0 auto 20px' }} />
}

export const Basic = Template.bind({})
