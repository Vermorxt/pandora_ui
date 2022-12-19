import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_TextArea from './TextArea'
import { Ui_TextAreaProps } from './type'

export default {
  title: 'Text area',
  component: Ui_TextArea,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    bordered: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Ui_TextArea>

const Template = ({ ...rest }: Ui_TextAreaProps) => {
  return <Ui_TextArea {...rest} className="w-full max-w-sm m-auto mb-4" />
}

export const Basic = Template.bind({})
