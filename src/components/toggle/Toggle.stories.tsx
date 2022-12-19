import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Toggle from './Toggle'
import { Ui_ToggleProps } from './type'

export default {
  title: 'Toggle',
  component: Ui_Toggle,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
} as ComponentMeta<typeof Ui_Toggle>

const Template = ({ ...rest }: Ui_ToggleProps) => {
  return (
    <div className="w-8">
      <Ui_Toggle {...rest} ref={null} />
    </div>
  )
}

export const Basic = Template.bind({})
