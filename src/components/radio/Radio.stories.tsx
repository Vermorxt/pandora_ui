import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Radio from './Radio'
import { Ui_RadioProps } from './type'

export default {
  title: 'Radio',
  component: Ui_Radio,
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
    size: {
      options: ['large', 'medium', 'small', 'mini'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Ui_Radio>

const Template = ({ ...rest }: Ui_RadioProps) => {
  const { value } = rest

  return <Ui_Radio {...rest} name="radio_1" ref={null} />
}

export const Basic = Template.bind({})
