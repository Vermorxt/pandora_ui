import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Navbar from './Navbar'
import Ui_Button from './../button'
import { Ui_NavbarProps } from './type'

export default {
  title: 'Navbar',
  component: Ui_Navbar,
  argTypes: {
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
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof Ui_Navbar>

const Template = ({ ...rest }: Ui_NavbarProps) => {
  return (
    <Ui_Navbar id="navbar-3" {...rest} ref={null}>
      <Ui_Navbar.Start>
        <Ui_Button variant="ghost" size="small">
          CMS
        </Ui_Button>
      </Ui_Navbar.Start>
      <Ui_Navbar.Center>
        <p>Centered content</p>
      </Ui_Navbar.Center>
      <Ui_Navbar.End>
        <Ui_Button size="small" variant="primary">
          Do sth.
        </Ui_Button>
      </Ui_Navbar.End>
    </Ui_Navbar>
  )
}

export const Basic = Template.bind({})
