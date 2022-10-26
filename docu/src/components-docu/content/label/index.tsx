import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { labelCodeExamples } from './label-code'

export const Ui_Docu_Label: FC = props => {
  console.log('label docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Toggle', description: 'Label element', type: 'Component' },
      { name: 'as', description: 'Label as other component styles', type: 'Modifier', values: 'button' },
      { name: 'primary', description: 'Label with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Label with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Label with `accent` color', type: 'Modifier' },
      { name: 'large', description: 'Label with size `large`', type: 'Modifier' },
      { name: 'medium', description: 'Label with size `medium`', type: 'Modifier' },
      { name: 'small', description: 'Label with size `small`', type: 'Modifier' },
      { name: 'tiny', description: 'Label with size `tiny`', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Label</h1>
      <p>Label is a label component.</p>

      <DocuAttributes {...{ attributes }} />

      {labelCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
