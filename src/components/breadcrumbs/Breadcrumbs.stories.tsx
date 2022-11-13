import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Breadcrumbs from './Breadcrumbs'
import { Ui_BreadcrumbsProps } from './type'

export default {
  title: 'Breadcrumbs',
  component: Ui_Breadcrumbs,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    size: {
      options: ['large', 'medium', 'small', 'mini', 'tiny'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Ui_Breadcrumbs>

const Template = ({ ...rest }: Ui_BreadcrumbsProps) => {
  return (
    <Ui_Breadcrumbs {...rest} ref={null}>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
        <li>Add Document</li>
      </ul>
    </Ui_Breadcrumbs>
  )
}

export const Basic = Template.bind({})
