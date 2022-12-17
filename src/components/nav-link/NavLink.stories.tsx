import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_NavLink from './NavLink'
import { Ui_NavLinkProps } from './type'

export default {
  title: 'NavLink',
  component: Ui_NavLink,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
      defaultValue: 'primary',
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    outline: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_NavLink>

const Template = ({ ...rest }: Ui_NavLinkProps) => {
  return <Ui_NavLink {...rest}>Link</Ui_NavLink>
}

export const Basic = Template.bind({})
