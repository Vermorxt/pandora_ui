import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { mockupWindowCodeExamples } from './mockup-window-code'

export const Ui_Docu_MockupWindow: FC = props => {
  console.log('mockup window docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_MockupWindow', description: 'MockupWindow element', type: 'Component' },
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
      <h1>Mockup window</h1>
      <p>Window mockup shows a box that looks like an operating system window.</p>

      <DocuAttributes {...{ attributes }} />

      {mockupWindowCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
