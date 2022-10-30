---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_<%= name %> from './<%= name %>';
import {Ui_<%= name %>Props} from './type';


export default {
  title: '<%= name %>',
  component: Ui_<%= name %>,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_<%= name %>>

const Template = ({ ...rest }: Ui_<%= name %>Props) => {
  return (
    <Ui_<%= name %> {...rest} ref={null}>
      <span><%= name %> component.</span>
    </Ui_<%= name %>>
  )
}

export const Basic = Template.bind({})


