import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { kbdCodeExamples } from './kbd-code'

export const Ui_Docu_Kbd: FC = props => {
  console.log('kbd docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Kbd', description: 'Component element', type: 'Component' },
      { name: 'large', description: 'Large kbd', type: 'Responsive' },
      { name: 'medium', description: 'Medium kbd (default)', type: 'Responsive' },
      { name: 'small', description: 'Small kbd', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small kbd', type: 'Responsive' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Kbd</h1>
      <p>Kbd is used to display keyboard shortcuts.</p>

      <DocuAttributes {...{ attributes }} />

      {kbdCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
