import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Button from './Button'
import { Ui_ButtonProps } from './type'

export default {
  title: 'Button',
  component: Ui_Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'ghost',
        'neutral',
        'error',
        'active',
        'glass',
        'circle',
      ],
    },
    outline: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'block', 'wide', 'full'],
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Button>

const Template = ({ ...rest }: Ui_ButtonProps) => {
  return (
    <Ui_Button {...rest} ref={null}>
      <span>Button</span>
    </Ui_Button>
  )
}

export const Basic = Template.bind({})
