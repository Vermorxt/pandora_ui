import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { radioCodeExamples } from './radio-code'

export const Ui_Docu_Radio: FC = props => {
  console.log('radio docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Radio', description: 'Radio element', type: 'Component' },
      { name: 'checked', description: 'Radio checked', type: 'Modifier' },
      { name: 'indeterminate', description: 'Radio with indeterminate state', type: 'Modifier' },
      { name: 'label', description: 'Radio label', type: 'Modifier' },
      {
        name: 'labelPosition',
        description: 'Radio label position',
        type: 'Modifier',
        values: 'right, left (default)',
      },
      { name: 'disabled', description: 'Radio disabled', type: 'Modifier' },
      { name: 'primary', description: 'Radio with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Radio with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Radio with `accent` color', type: 'Modifier' },
      { name: 'large', description: 'Radio with size `large`', type: 'Modifier' },
      { name: 'medium', description: 'Radio with size `medium`', type: 'Modifier' },
      { name: 'small', description: 'Radio with size `small`', type: 'Modifier' },
      { name: 'tiny', description: 'Radio with size `tiny`', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Radio</h1>
      <p>Radios are used to select or deselect a value.</p>

      <DocuAttributes {...{ attributes }} />

      {radioCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
