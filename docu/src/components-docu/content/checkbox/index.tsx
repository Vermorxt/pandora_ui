import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { checkboxCodeExamples } from './checkbox-code'

export const Ui_Docu_Checkbox: FC = props => {
  console.log('checkbox docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Checkbox', description: 'Checkbox element', type: 'Component' },
      { name: 'checked', description: 'Checkbox checked', type: 'Modifier' },
      { name: 'indeterminate', description: 'Checkbox with indeterminate state', type: 'Modifier' },
      { name: 'label', description: 'Checkbox label', type: 'Modifier' },
      {
        name: 'labelPosition',
        description: 'Checkbox label position',
        type: 'Modifier',
        values: 'right, left (default)',
      },
      { name: 'disabled', description: 'Checkbox disabled', type: 'Modifier' },
      { name: 'primary', description: 'Checkbox with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Checkbox with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Checkbox with `accent` color', type: 'Modifier' },
      { name: 'large', description: 'Checkbox with size `large`', type: 'Modifier' },
      { name: 'medium', description: 'Checkbox with size `medium`', type: 'Modifier' },
      { name: 'small', description: 'Checkbox with size `small`', type: 'Modifier' },
      { name: 'tiny', description: 'Checkbox with size `tiny`', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Checkbox</h1>
      <p>Checkboxes are used to select or deselect a value.</p>

      <DocuAttributes {...{ attributes }} />

      {checkboxCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
