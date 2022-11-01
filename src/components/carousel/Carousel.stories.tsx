import React from 'react';
import { ComponentMeta } from '@storybook/react'
import Ui_Carousel from './Carousel';
import {Ui_CarouselProps} from './type';


export default {
  title: 'Carousel',
  component: Ui_Carousel,
  argTypes: {
  },
} as ComponentMeta<typeof Ui_Carousel>

const Template = ({ ...rest }: Ui_CarouselProps) => {
  return (
    <Ui_Carousel {...rest} ref={null}>
      <span>Carousel component.</span>
    </Ui_Carousel>
  )
}

export const Basic = Template.bind({})


