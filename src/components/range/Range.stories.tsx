import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Range from './Range'
import { Ui_RangeProps } from './type'

export default {
  title: 'Range',
  component: Ui_Range,
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
    step: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    min: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    max: {
      control: { type: 'number' },
      defaultValue: 100,
    },
  },
} as ComponentMeta<typeof Ui_Range>

const Template = ({ ...rest }: Ui_RangeProps) => {
  return <Ui_Range {...rest} ref={null}></Ui_Range>
}

export const Basic = Template.bind({})
