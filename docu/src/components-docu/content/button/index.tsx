import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { buttonCodeExamples } from './btn-code'

export const Ui_Docu_Button: FC = props => {
  console.log('btn docu')

  const attributes = {
    header: ['Attributes', 'Type', '', '', 'Description'],
    values: [
      { name: 'Ui_Button', description: 'Button element', type: 'Component' },
      { name: 'primary', description: 'Button with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Button with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Button with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Button with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Button with `success` color', type: 'Modifier' },
      { name: 'warning', description: 'Button with `warning` color', type: 'Modifier' },
      { name: 'error', description: 'Button with `error` color', type: 'Modifier' },
      { name: 'ghost', description: 'Button with ghost style', type: 'Modifier' },
      { name: 'link', description: 'Button styled as a link', type: 'Modifier' },
      { name: 'outline', description: 'Transparent Button with colored border', type: 'Modifier' },
      { name: 'active', description: 'Force button to show active state', type: 'Modifier' },
      { name: 'disabled', description: 'Force button to show disabled state', type: 'Modifier' },
      { name: 'glass', description: 'Button with a glass effect', type: 'Modifier' },
      { name: 'loading', description: 'Shows loading spinner', type: 'Modifier' },
      { name: 'noAnimation', description: 'Disables click animation', type: 'Modifier' },
      { name: 'large', description: 'Large button', type: 'Responsive' },
      { name: 'medium', description: 'Medium button (default)', type: 'Responsive' },
      { name: 'small', description: 'Small button', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small button', type: 'Responsive' },
      { name: 'wide', description: 'Wide button (more horizontal padding)', type: 'Responsive' },
      { name: 'block', description: 'Full width button', type: 'Responsive' },
      { name: 'circle', description: 'Circle button with a 1:1 ratio', type: 'Responsive' },
      { name: 'square', description: 'Square button with a 1:1 ratio', type: 'Responsive' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Button</h1>
      <p>Buttons allows user to take actions or make choices.</p>

      <DocuAttributes {...{ attributes }} />

      {buttonCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
