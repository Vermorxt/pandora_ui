import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { inputGroupCodeExamples } from './input-group-code'

export const Ui_Docu_InputGroup: FC = props => {
  console.log('input group docu')

  const attributes = {
    header: ['Attributes', 'Type', '', '', 'Description'],
    values: [
      { name: 'Ui_InputGroup', description: 'Input group element', type: 'Component' },
      { name: 'vertical', description: 'Vertical alignment of label and input', type: 'Modifier' },
      { name: 'large', description: 'Large group', type: 'Responsive' },
      { name: 'medium', description: 'Medium group (default)', type: 'Responsive' },
      { name: 'small', description: 'Small group', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small group', type: 'Responsive' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Input group</h1>
      <p>Input group puts an input next to a text or a button.</p>

      <DocuAttributes {...{ attributes }} />

      {inputGroupCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
