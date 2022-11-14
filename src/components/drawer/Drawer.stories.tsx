import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Drawer from './Drawer'
import { Ui_DrawerProps } from './type'
import { AnyType } from '_types/AnyType'

export default {
  title: 'Drawer',
  component: Ui_Drawer,
  argTypes: {
    menuItems: {
      control: {
        type: 'string',
        value: (
          <ul key={1} className={`menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content`}>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        ).toString(),
      },
    },
    id: {
      control: { type: 'text' },
    },
    defaultOpenOnLargeScreen: { control: { type: 'boolean' } },
    opensRight: { control: { type: 'boolean' } },
    isNavbar: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Ui_Drawer>

const menuItems = [
  <ul key={1} className={`menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content`}>
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>,
] as AnyType[]

const Template = ({ ...rest }: Ui_DrawerProps) => {
  return (
    <Ui_Drawer className="h-56" id="drawer-1" {...rest}>
      <Ui_Drawer.Content id="drawer-1" {...rest} className="flex flex-col items-center justify-center">
        <label htmlFor="drawer-1" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </Ui_Drawer.Content>
      <Ui_Drawer.Side id="drawer-1" {...rest}>
        {menuItems}
      </Ui_Drawer.Side>
    </Ui_Drawer>
  )
}

export const Basic = Template.bind({})
