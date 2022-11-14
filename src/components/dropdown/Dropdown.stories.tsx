import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Ui_DropdownProps } from './type'
import Ui_Dropdown from './dropdown'

const defaultUlMenuClassNames = 'menu menu-compact p-4'

const dummyListItems = (
  <ul className={defaultUlMenuClassNames}>
    <li>
      <a>Item 1</a>
    </li>
    <li>
      <a>Item 2</a>
    </li>
  </ul>
)

export default {
  title: 'Dropdown',
  component: Ui_Dropdown,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'ghost',
        'neutral',
        'error',
        'active',
        'glass',
        'circle',
      ],
    },
    label: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'block', 'wide', 'full'],
      control: { type: 'radio' },
    },
    position: {
      options: ['top', 'left', 'bottom', 'right'],
      control: { type: 'select' },
    },
    type: {
      options: ['full', 'card', 'default'],
      control: { type: 'multi-select' },
    },
    action: {
      options: ['hover', 'open', 'default'],
      control: { type: 'multi-select' },
    },
    outline: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Ui_Dropdown>

const Template = ({ ...rest }: Ui_DropdownProps) => {
  return (
    <Ui_Dropdown {...rest} ref={null}>
      <Ui_Dropdown.Label tabIndex={0} className="btn m-1" {...rest}>
        Click
      </Ui_Dropdown.Label>
      <Ui_Dropdown.Content {...rest} className="w-52">
        {dummyListItems}
      </Ui_Dropdown.Content>
    </Ui_Dropdown>
  )
}

export const Basic = Template.bind({})
