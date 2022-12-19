import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Ui_Table from './Table'
import { Ui_TableProps } from './type'

export default {
  title: 'Table',
  component: Ui_Table,
  argTypes: {
    active: {
      control: { type: 'boolean' },
    },
    zebra: {
      control: { type: 'boolean' },
    },
    compact: {
      control: { type: 'boolean' },
    },
    stickyHeader: {
      control: { type: 'boolean' },
    },
    bgColor: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
    textColor: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'ghost', 'neutral', 'error'],
    },
  },
} as ComponentMeta<typeof Ui_Table>

const Template = ({ ...rest }: Ui_TableProps) => {
  const { zebra, compact } = rest
  return (
    <Ui_Table {...{ compact, zebra }}>
      <Ui_Table.Head>
        <Ui_Table.Row>
          <Ui_Table.Td>Name</Ui_Table.Td>
          <Ui_Table.Td>Job</Ui_Table.Td>
          <Ui_Table.Td>Color</Ui_Table.Td>
        </Ui_Table.Row>
      </Ui_Table.Head>
      <Ui_Table.Body>
        <Ui_Table.Row>
          <Ui_Table.Td>Joe</Ui_Table.Td>
          <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
          <Ui_Table.Td>blue</Ui_Table.Td>
        </Ui_Table.Row>
        <Ui_Table.Row>
          <Ui_Table.Td {...rest}>Karl</Ui_Table.Td>
          <Ui_Table.Td {...rest}>Desktop Support Technician</Ui_Table.Td>
          <Ui_Table.Td {...rest}>purple</Ui_Table.Td>
        </Ui_Table.Row>
        <Ui_Table.Row>
          <Ui_Table.Td>Lars</Ui_Table.Td>
          <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
          <Ui_Table.Td>pink</Ui_Table.Td>
        </Ui_Table.Row>
      </Ui_Table.Body>
    </Ui_Table>
  )
}

export const Basic = Template.bind({})
