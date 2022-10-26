import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { mockupPhoneCodeExamples } from './mockup-phone-code'

export const Ui_Docu_MockupPhone: FC = props => {
  console.log('mockupPhone docu')
  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_MockupPhone', description: 'MockupPhone element', type: 'Component' },
      {
        name: 'border',
        description:
          'Phone border color (default: bg-base-100). See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      {
        name: 'bgColor',
        description:
          'Phone background color (default: bg-base-100). See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      {
        name: 'shadow',
        description: 'Phone shadow (default: xl). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
        values: "'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean",
      },
      {
        name: 'rounded',
        description: 'Phone rounded corner (default: box). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Mockup phone</h1>
      <p>Phone mockup shows a mockup of an iPhone.</p>

      <DocuAttributes {...{ attributes }} />

      {mockupPhoneCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
