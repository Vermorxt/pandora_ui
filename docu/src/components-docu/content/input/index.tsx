import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { inputCodeExamples } from './input-code'

export const Ui_Docu_Input: FC = props => {
  console.log('input docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Input', description: 'Input element', type: 'Component' },
      { name: 'placeholder', description: 'Input placeholder', type: 'Modifier' },
      { name: 'value', description: 'Input value', type: 'Modifier' },
      { name: 'type', description: 'Input type', type: 'Modifier' },
      { name: 'label', description: 'Input label', type: 'Modifier' },
      { name: 'altLabel', description: 'Input alternative label', type: 'Modifier' },
      { name: 'disabled', description: 'Input disabled', type: 'Modifier' },
      { name: 'ghost', description: 'Input with `ghost` color', type: 'Modifier' },
      { name: 'primary', description: 'Input with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Input with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Input with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Input with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Input with `success` color', type: 'Modifier' },
      { name: 'error', description: 'Input with `error` color', type: 'Modifier' },
      { name: 'large', description: 'Input with size `large`', type: 'Modifier' },
      { name: 'medium', description: 'Input with size `medium`', type: 'Modifier' },
      { name: 'small', description: 'Input with size `small`', type: 'Modifier' },
      { name: 'tiny', description: 'Input with size `tiny`', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Input</h1>
      <p>Text Input is a simple input field.</p>

      <DocuAttributes {...{ attributes }} />

      {inputCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
