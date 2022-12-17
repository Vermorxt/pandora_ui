import React from 'react'
import Ui_MockupCode from './MockupCode'
import { Ui_MockupCodeProps } from './type'

export default {
  title: 'MockupCode',
  component: Ui_MockupCode,
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

const Template = ({ ...rest }: Ui_MockupCodeProps) => (
  <Ui_MockupCode {...rest} ref={null}>
    <pre data-prefix="$">
      <code>npm i daisyui</code>
    </pre>
    <pre data-prefix=">" className="text-warning">
      <code>installing...</code>
    </pre>
    <pre data-prefix=">" className="text-success">
      <code>Done!</code>
    </pre>
  </Ui_MockupCode>
)

export const Basic = Template.bind({})
