import React from 'react'
import Ui_MockupWindow from './MockupWindow'
import { Ui_MockupWindowProps } from './type'

export default {
  title: 'MockupWindow',
  component: Ui_MockupWindow,
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

const Template = ({ ...rest }: Ui_MockupWindowProps) => (
  <Ui_MockupWindow {...rest} ref={null} className="w-full border">
    <div className="p-16">
      <h1>Text content.</h1>
    </div>
  </Ui_MockupWindow>
)

export const Basic = Template.bind({})
