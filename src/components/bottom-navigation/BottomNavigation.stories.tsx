import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_BottomNavigation from './BottomNavigation'
import { Ui_BottomNavigationProps } from './type'

export default {
  title: 'BottomNavigation',
  component: Ui_BottomNavigation,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error', 'none'],
      defaultValue: 'primary',
    },
    bgColor: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error', 'none'],
      defaultValue: 'none',
    },
    activeColor: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error', 'none'],
      defaultValue: 'none',
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
      defaultValue: 'mini',
    },
    shadow: {
      options: ['sm', 'lg', 'xl', '2xl', 'md', 'none', true, false],
      control: { type: 'radio' },
      defaultValue: 'xl',
    },
    rounded: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    bordered: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Ui_BottomNavigation>

const Template = ({ ...rest }: Ui_BottomNavigationProps) => {
  return (
    <Ui_BottomNavigation
      {...rest}
      navigation={[
        {
          title: 'Home',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
        },
        {
          title: 'Warnings',
          active: true,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        },
        {
          title: 'Settings',
          disabled: true,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
        },
      ]}
    ></Ui_BottomNavigation>
  )
}

export const Basic = Template.bind({})
