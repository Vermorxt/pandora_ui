import React from 'react'
import Ui_Modal from './Modal'
import { Ui_ModalProps } from './type'

export default {
  title: 'Modal',
  component: Ui_Modal,
  argTypes: {
    shadow: {
      options: ['sm', 'lg', 'xl', '2xl', 'md', 'none'],
      control: { type: 'radio' },
    },
    bgColor: {
      control: { type: 'text' },
      defaultValue: 'bg-base-100',
    },
  },
}

const Template = ({ ...rest }: Ui_ModalProps) => (
  <>
    <Ui_Modal {...rest} ref={null}>
      <>
        <h1>Hello</h1>
        <p>This is a modal ...</p>
      </>
    </Ui_Modal>
  </>
)

export const Basic = Template.bind({})
