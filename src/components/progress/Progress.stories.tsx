import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Progress from './Progress'
import { Ui_ProgressProps } from './type'

export default {
  title: 'Progress',
  component: Ui_Progress,
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
  },
} as ComponentMeta<typeof Ui_Progress>

const Template = ({ ...rest }: Ui_ProgressProps) => {
  return <Ui_Progress {...rest} ref={null}></Ui_Progress>
}

export const Basic = Template.bind({})
