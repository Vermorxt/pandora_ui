import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { alertCodeExamples } from './alert-code'

export const Ui_Alert_Docu: FC = props => {
  console.log('alert docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Alert', description: 'Container element with default info icon', type: 'Component' },
      {
        name: 'info',
        description: 'Alert with info background color and info icon',
        type: 'Modifier',
      },
      {
        name: 'warning',
        description: 'Alert with warning background color and warning icon',
        type: 'Modifier',
      },
      {
        name: 'success',
        description: 'Alert with success background color and success icon',
        type: 'Modifier',
      },
      {
        name: 'error',
        description: 'Alert with error background color and error icon',
        type: 'Modifier',
      },
      {
        name: 'noIcon',
        description: 'Hide default alert icon',
        type: 'Modifier',
        values: 'true/false (default)',
      },
      {
        name: 'onAccept',
        description: 'Callback function for accept button click. (adds accept button automatically)',
        type: 'Modifier',
        values: '(event) => void',
      },
      {
        name: 'onDeny',
        description: 'Callback function for deny button click. (adds deny button automatically)',
        type: 'Modifier',
        values: '(event) => void',
      },
      {
        name: 'onAcceptButtonText',
        description: 'Button text for accept button. (default value "Accept")',
        type: 'Function',
        values: '',
      },
      {
        name: 'onDenyButtonText',
        description: 'Button text for accept button. (default value "Deny")',
        type: 'Function',
        values: '',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Alert</h1>
      <p>Alert informs users about important events.</p>

      <DocuAttributes {...{ attributes }} />

      {alertCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
