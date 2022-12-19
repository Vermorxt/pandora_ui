import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Swap from './Swap'
import { Ui_SwapProps } from './type'

export default {
  title: 'Swap',
  component: Ui_Swap,
  argTypes: {
    swapFlip: {
      control: { type: 'boolean' },
    },
    swapRotate: {
      control: { type: 'boolean' },
    },
    swapOn: {
      control: { type: 'text' },
      defaultValue: 'ON',
    },
    swapOff: {
      control: { type: 'text' },
      defaultValue: 'OFF',
    },
    swapActive: {
      control: { type: 'radio' },
      options: ['on', 'off'],
    },
  },
} as ComponentMeta<typeof Ui_Swap>

const Template = ({ ...rest }: Ui_SwapProps) => {
  return <Ui_Swap {...rest} ref={null} />
}

export const Basic = Template.bind({})
