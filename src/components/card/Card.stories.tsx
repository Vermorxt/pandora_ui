import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Ui_CardProps } from './type'
import Ui_Card from './Card'

export default {
  title: 'Card',
  component: Ui_Card,
  argTypes: {},
} as ComponentMeta<any>

const Template = ({ ...rest }: Ui_CardProps) => {
  return (
    <Ui_Card {...rest} ref={null}>
      <span>Card component.</span>
    </Ui_Card>
  )
}

export const Basic = Template.bind({})
