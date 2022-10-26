import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { stackCodeExamples } from './stack-code'

export const Ui_Docu_Stack: FC = props => {
  console.log('stack docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [{ name: 'Ui_Stack', description: 'Stack element', type: 'Component' }],
  }

  return (
    <DocuWrapper>
      <h1>Stack</h1>
      <p>Stack visually puts elements on top of each other.</p>

      <DocuAttributes {...{ attributes }} />

      {stackCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
