import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Footer from './Footer'
import { Ui_FooterProps } from './type'

export default {
  title: 'Footer',
  component: Ui_Footer,
  argTypes: {
    shadow: {
      control: { type: 'boolean' },
    },
    rounded: {
      control: { type: 'boolean' },
    },
    center: {
      control: { type: 'boolean' },
    },
    bgColor: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
  },
} as ComponentMeta<typeof Ui_Footer>

const Template = ({ ...rest }: Ui_FooterProps) => {
  return (
    <Ui_Footer {...rest} ref={null} className="p-4">
      <div>
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </Ui_Footer>
  )
}

export const Basic = Template.bind({})
