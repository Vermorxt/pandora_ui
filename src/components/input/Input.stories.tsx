import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Input from './Input'
import { Ui_InputProps } from './type'

export default {
  title: 'Input',
  component: Ui_Input,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
      defaultValue: 'primary',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Placeholder',
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Label text',
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Ui_Input>

const Template = ({ ...rest }: Ui_InputProps) => {
  return (
    <div className="form-control w-full max-w-sm m-auto">
      <Ui_Input {...rest} className="w-full max-w-sm m-auto mb-4" />
    </div>
  )
}

export const Basic = Template.bind({})
