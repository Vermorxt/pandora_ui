import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_InputGroup from './InputGroup'
import { Ui_InputGroupProps } from './type'
import Ui_Input from './../../components/input'
import { Ui_InputProps } from 'components/input/type'

export default {
  title: 'InputGroup',
  component: Ui_InputGroup,
  argTypes: {
    vertical: {
      control: { type: 'boolean' },
    },
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
} as ComponentMeta<typeof Ui_InputGroup>

const Template = ({ ...rest }: Ui_InputGroupProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Enter amount</span>
      </label>
      <Ui_InputGroup {...rest} ref={null}>
        <Ui_Input placeholder="0.01" bordered {...(rest as Ui_InputProps)} />
        <span>BTC</span>
      </Ui_InputGroup>
    </div>
  )
}

export const Basic = Template.bind({})
