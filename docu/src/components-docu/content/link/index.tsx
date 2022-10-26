import { FC } from 'react'
import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { linkCodeExamples } from './link-code'

export const Ui_Docu_Link: FC = props => {
  console.log('link docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Link', description: 'Link element', type: 'Component' },
      { name: 'hover', description: 'Link with underline on hover', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Link</h1>
      <p>Link helps users to navigate through the website.</p>

      <DocuAttributes {...{ attributes }} />

      {linkCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
