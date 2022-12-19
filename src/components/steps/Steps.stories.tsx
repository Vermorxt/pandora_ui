import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Steps from './Steps'
import { Ui_StepsProps } from './type'

export default {
  title: 'Steps',
  component: Ui_Steps,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
  },
} as ComponentMeta<typeof Ui_Steps>

const Template = ({ ...rest }: Ui_StepsProps) => {
  return (
    <Ui_Steps {...rest} ref={null}>
      <Ui_Steps.Step {...rest} ref={null}>
        Register
      </Ui_Steps.Step>
      <Ui_Steps.Step {...rest} ref={null}>
        Choose plan
      </Ui_Steps.Step>
      <Ui_Steps.Step {...rest} ref={null}>
        Purchase
      </Ui_Steps.Step>
      <Ui_Steps.Step {...rest} ref={null}>
        Receive Product
      </Ui_Steps.Step>
    </Ui_Steps>
  )
}

export const Basic = Template.bind({})
