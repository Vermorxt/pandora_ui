import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Label from './Label'
import { Ui_LabelProps } from './type'
import Ui_Input from '../input'
import { Ui_InputProps } from 'components/input/type'

export default {
  title: 'Label',
  component: Ui_Label,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
      defaultValue: 'primary',
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    as: {
      options: ['button', 'default'],
      control: { type: 'radio' },
      defaultValue: 'default',
    },
  },
} as ComponentMeta<typeof Ui_Label>

const Template = ({ ...rest }: Ui_LabelProps) => {
  return <Ui_Label {...rest}>Label</Ui_Label>
}

export const Basic = Template.bind({})
