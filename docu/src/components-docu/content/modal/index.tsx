import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { modalCodeExamples } from './modal-code'

export const Ui_Docu_Modal: FC = props => {
  console.log('modal docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Modal', description: 'Container element', type: 'Component' },
      {
        name: 'id',
        description:
          'Modal id to identify used modal (be sure always use unique id on one page, otherwise it does not open a modal)',
        type: 'Modifier',
      },
      { name: 'buttonText', description: 'Text for button that opens modal', type: 'Modifier' },
      {
        name: 'closeClickOutside',
        description: 'Modal has close button or not. Click outside modal closes modal window',
        type: 'Modifier',
        values: 'true/false (default)',
      },
      { name: 'full', description: 'Full width modal', type: 'Responsive' },
      { name: 'large', description: 'Large modal', type: 'Responsive' },
      { name: 'medium', description: 'Medium modal', type: 'Responsive' },
      { name: 'small', description: 'Small modal (default)', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small modal', type: 'Responsive' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Modal</h1>
      <p>Modal is used to show a dialog or a box when you click a button.</p>

      <DocuAttributes {...{ attributes }} />

      {modalCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
