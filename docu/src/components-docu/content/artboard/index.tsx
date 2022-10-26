import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { artboardCodeExamples } from './artboard-code'

export const Docu_Artboard: FC = props => {
  console.log('artboard docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Artboard', description: 'Artboard element', type: 'Component' },
      { name: 'horizontal', description: 'Artboard with horizontal', type: 'Modifier' },
      { name: 'phone1', description: 'Artboard with size 320×568 (default)', type: 'Modifier' },
      { name: 'phone2', description: 'Artboard with size 375x667', type: 'Modifier' },
      { name: 'phone3', description: 'Artboard with size 414x736', type: 'Modifier' },
      { name: 'phone4', description: 'Artboard with size 375x812', type: 'Modifier' },
      { name: 'phone5', description: 'Artboard with size 414×896', type: 'Modifier' },
      { name: 'phone6', description: 'Artboard with size 320x1024', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Artboard</h1>
      <p>Artboard provides fixed size container to display a demo content on mobile size.</p>

      <DocuAttributes {...{ attributes }} />

      {artboardCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
