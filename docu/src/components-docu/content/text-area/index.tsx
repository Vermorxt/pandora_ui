import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { textAreaCodeExamples } from './textArea-code'

export const Ui_Docu_TextArea: FC = props => {
  console.log('textarea docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_TextArea', description: 'TextArea element', type: 'Component' },
      { name: 'placeholder', description: 'TextArea placeholder', type: 'Modifier' },
      { name: 'value', description: 'TextArea value', type: 'Modifier' },
      { name: 'type', description: 'TextArea type', type: 'Modifier' },
      { name: 'label', description: 'TextArea label', type: 'Modifier' },
      { name: 'altLabel', description: 'TextArea alternative label', type: 'Modifier' },
      { name: 'disabled', description: 'TextArea disabled', type: 'Modifier' },
      { name: 'ghost', description: 'TextArea with `ghost` color', type: 'Modifier' },
      { name: 'primary', description: 'TextArea with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'TextArea with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'TextArea with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'TextArea with `info` color', type: 'Modifier' },
      { name: 'success', description: 'TextArea with `success` color', type: 'Modifier' },
      { name: 'error', description: 'TextArea with `error` color', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>TextArea</h1>
      <p>TextArea is a simple text-area field.</p>

      <DocuAttributes {...{ attributes }} />

      {textAreaCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
