import { FC } from 'react'
import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { footerCodeExamples } from './footer-code'

export const Ui_Docu_Footer: FC = props => {
  console.log('Footer docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Footer', description: 'Footer element', type: 'Component' },
      { name: 'Ui_Footer.Title', description: 'Footer title element', type: 'Component', target: 'Ui_Footer' },
      { name: 'id', description: 'Footer id', type: 'Modifier' },
      { name: 'center', description: 'Footer centered', type: 'Modifier' },
      { name: 'centerItems', description: 'Footer center items', type: 'Modifier' },
      {
        name: 'bgColor',
        description:
          'Footer background color (default: bg-base-100). See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      {
        name: 'shadow',
        description: 'Footer shadow (default: xl). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
        values: "'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean",
      },
      {
        name: 'rounded',
        description: 'Footer rounded corner (default: box). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Footer</h1>
      <p>Footer can contain logo, copyright notice, and links to other pages.</p>

      <DocuAttributes {...{ attributes }} />

      {footerCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
