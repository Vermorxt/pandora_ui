import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Countdown from './Countdown'
import { Ui_CountdownProps } from './type'

export default {
  title: 'Countdown',
  component: Ui_Countdown,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'mini'],
      control: { type: 'radio' },
    },
    finishColor: {
      control: { type: 'color', presetColors: ['red', 'green'] },
    },
    targetTime: {
      control: { type: 'date' },
    },
    template: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Ui_Countdown>

const Template = ({ ...rest }: Ui_CountdownProps) => {
  return (
    <div className="whitespace-nowrap min-w-full mx-auto grid">
      <Ui_Countdown {...rest} ref={null} />
    </div>
  )
}

export const Basic = Template.bind({})
