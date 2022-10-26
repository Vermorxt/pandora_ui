import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { toggleCodeExamples } from './toggle-code'

export const Ui_Docu_Toggle: FC = props => {
  console.log('toggle docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Toggle', description: 'Toggle element', type: 'Component' },
      { name: 'checked', description: 'Toggle checked', type: 'Modifier' },
      { name: 'indeterminate', description: 'Toggle with indeterminate state', type: 'Modifier' },
      { name: 'label', description: 'Toggle label', type: 'Modifier' },
      {
        name: 'labelPosition',
        description: 'Toggle label position',
        type: 'Modifier',
        values: 'right, left (default)',
      },
      { name: 'disabled', description: 'Toggle disabled', type: 'Modifier' },
      { name: 'primary', description: 'Toggle with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Toggle with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Toggle with `accent` color', type: 'Modifier' },
      { name: 'large', description: 'Toggle with size `large`', type: 'Modifier' },
      { name: 'medium', description: 'Toggle with size `medium`', type: 'Modifier' },
      { name: 'small', description: 'Toggle with size `small`', type: 'Modifier' },
      { name: 'tiny', description: 'Toggle with size `tiny`', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Toggle</h1>
      <p>Toggle is a checkbox that is styled to look like a switch button.</p>

      <DocuAttributes {...{ attributes }} />

      {toggleCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
