import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Checkbox from './Checkbox'
import { Ui_CheckboxProps } from './type'

export default {
  title: 'Checkbox',
  component: Ui_Checkbox,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'mini'],
      control: { type: 'radio' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    labelPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
} as ComponentMeta<typeof Ui_Checkbox>

const Template = ({ ...rest }: Ui_CheckboxProps) => {
  return <Ui_Checkbox label={'Label'} {...rest} ref={null} />
}

export const Basic = Template.bind({})
