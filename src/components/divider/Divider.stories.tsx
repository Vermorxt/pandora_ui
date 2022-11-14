import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Divider from './Divider'
import { Ui_DividerProps } from './type'

export default {
  title: 'Divider',
  component: Ui_Divider,
  argTypes: {
    horizontal: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Divider>

const Template = ({ ...rest }: Ui_DividerProps) => {
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      <Ui_Divider ref={null}>OR</Ui_Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  )
}

const TemplateHorizontal = ({ ...rest }: Ui_DividerProps) => {
  return (
    <div className="flex w-full">
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
      <Ui_Divider horizontal={true} ref={null}>
        OR
      </Ui_Divider>
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
    </div>
  )
}

export const Default = Template.bind({})
export const Horizontal = TemplateHorizontal.bind({})
