import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Link from './Link'
import { Ui_LinkProps } from './type'
import Ui_Input from '../input'
import { Ui_InputProps } from 'components/input/type'

export default {
  title: 'Link',
  component: Ui_Link,
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
    outline: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Link>

const Template = ({ ...rest }: Ui_LinkProps) => {
  return <Ui_Link {...rest}>Label</Ui_Link>
}

export const Basic = Template.bind({})
