import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Kbd from './Kbd'
import { Ui_KbdProps } from './type'
import Ui_Input from '../input'
import { Ui_InputProps } from 'components/input/type'

export default {
  title: 'Kbd',
  component: Ui_Kbd,
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
  },
} as ComponentMeta<typeof Ui_Kbd>

const Template = ({ ...rest }: Ui_KbdProps) => {
  return (
    <Ui_Kbd {...rest} ref={null}>
      A
    </Ui_Kbd>
  )
}

export const Basic = Template.bind({})
