import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { buttonGroupCodeExamples } from './buttonGroup-code'

export const Ui_ButtonGroup_Docu: FC = props => {
  console.log('button group docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [{ name: 'Ui_ButtonGroup', description: 'ButtonGroup element', type: 'Component' }],
  }

  return (
    <DocuWrapper>
      <h1>Button group</h1>
      <p>Button group shows buttons next to each other.</p>

      <DocuAttributes {...{ attributes }} />

      {buttonGroupCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
