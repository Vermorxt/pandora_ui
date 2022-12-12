import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Menu from './Menu'
import { Ui_MenuProps } from './type'

export default {
  title: 'Menu',
  component: Ui_Menu,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
    },
    shadow: {
      options: ['sm', 'lg', 'xl', '2xl', 'md', 'none'],
      control: { type: 'radio' },
    },
    rounded: {
      options: ['sm', 'lg', 'xl', '2xl', 'md', 'none'],
      control: { type: 'radio' },
    },
    bgColor: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Ui_Menu>

const Template = ({ ...rest }: Ui_MenuProps) => {
  return (
    <Ui_Menu {...rest} ref={null} className="w-56">
      <li>
        <a>Item 1</a>
      </li>
      <li className="bordered">
        <a>Item 2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </Ui_Menu>
  )
}

export const Basic = Template.bind({})
