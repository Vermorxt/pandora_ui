import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { mockupCodeCodeExamples } from './mockup-code'

export const Ui_Docu_MockupCode: FC = props => {
  console.log('mockupCode docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_MockupCode', description: 'MockupCode element', type: 'Component' },
      {
        name: 'bgColor',
        description:
          'Code background color (default: bg-base-100). See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      {
        name: 'shadow',
        description: 'Code shadow (default: xl). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
        values: "'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean",
      },
      {
        name: 'rounded',
        description: 'Code rounded corner (default: box). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>MockupCode</h1>
      <p>Code mockup is used to show a block of code in a box that looks like a code editor.</p>

      <DocuAttributes {...{ attributes }} />

      {mockupCodeCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
