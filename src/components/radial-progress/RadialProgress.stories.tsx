import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_RadialProgress from './RadialProgress'
import { Ui_RadialProgressProps } from './type'

export default {
  title: 'Radial Progress',
  component: Ui_RadialProgress,
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
    value: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    max: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    primary: {
      control: { type: 'boolean' },
    },
    secondary: {
      control: { type: 'boolean' },
    },
    textPrimary: {
      control: { type: 'boolean' },
    },
    textSecondary: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_RadialProgress>

const Template = ({ ...rest }: Ui_RadialProgressProps) => {
  const { value } = rest

  return (
    <Ui_RadialProgress {...rest} value={value} ref={null}>
      {value}
    </Ui_RadialProgress>
  )
}

export const Basic = Template.bind({})
