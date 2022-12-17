import React from 'react'
import Ui_MockupPhone from './MockupPhone'
import Ui_Artboard from './../artboard'
import { Ui_MockupPhoneProps } from './type'

export default {
  title: 'MockupPhone',
  component: Ui_MockupPhone,
  argTypes: {
    shadow: {
      options: ['sm', 'lg', 'xl', '2xl', 'md', 'none'],
      control: { type: 'radio' },
    },
    bgColor: {
      control: { type: 'text' },
      defaultValue: 'bg-base-100',
    },
  },
}

const Template = ({ ...rest }: Ui_MockupPhoneProps) => (
  <Ui_MockupPhone {...rest} ref={null}>
    <Ui_Artboard demo phone1>
      Hi.
    </Ui_Artboard>
  </Ui_MockupPhone>
)

export const Basic = Template.bind({})
