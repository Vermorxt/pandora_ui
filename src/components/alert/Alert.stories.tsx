// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Ui_Alert from './Alert'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Alert',
  component: Ui_Alert,
  argTypes: {
    info: { control: 'boolean' },
    warning: { control: 'boolean' },
    success: { control: 'boolean' },
    error: { control: 'boolean' },
    onAcceptButtonText: {
      control: 'text',
      defaultValue: 'accept',
    },
    onDenyButtonText: { control: 'text', defaultValue: 'deny' },
    onDeny: { action: 'deny function' },
    onAccept: { action: 'accept function' },
  },
} as ComponentMeta<typeof Ui_Alert>

const Template = ({ ...rest }) => {
  //👇 Assigns the function result to a variable

  return (
    <Ui_Alert {...rest}>
      <span>Alert with buttons and custom button text for accept.</span>
    </Ui_Alert>
  )
}

export const Basic = Template.bind({})
