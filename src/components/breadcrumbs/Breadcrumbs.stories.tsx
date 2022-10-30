import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Breadcrumbs from './Breadcrumbs';
import {Ui_BreadcrumbsProps} from './type';


export default {
  title: 'Breadcrumbs',
  component: Ui_Breadcrumbs,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Breadcrumbs>

const Template = ({ ...rest }: Ui_BreadcrumbsProps) => {
  return (
    <Ui_Breadcrumbs {...rest} ref={null}>
      <span>Breadcrumbs component.</span>
    </Ui_Breadcrumbs>
  )
}

export const Basic = Template.bind({})


