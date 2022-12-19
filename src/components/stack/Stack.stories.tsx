import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Stack from './Stack'
import { Ui_StackProps } from './type'

export default {
  title: 'Stack',
  component: Ui_Stack,
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
    bgColor: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Ui_Stack>

const Template = ({ ...rest }: Ui_StackProps) => {
  return (
    <Ui_Stack {...rest} ref={null} className="w-32">
      <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
      <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
      <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
    </Ui_Stack>
  )
}

export const Basic = Template.bind({})
