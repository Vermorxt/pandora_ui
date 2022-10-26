import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { selectCodeExamples } from './select-code'

export const Ui_Docu_Select: FC = props => {
  console.log('select docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Select', description: 'Select element', type: 'Component' },
      { name: 'options', description: 'Select options parameter', type: 'Modifier', values: 'string[]' },
      { name: 'bordered', description: 'Select border', type: 'Modifier' },
      { name: 'type', description: 'Select type', type: 'Modifier' },
      { name: 'optionLabel', description: 'Select label as first option (disabled)', type: 'Modifier' },
      { name: 'altLabel', description: 'Select alternative label', type: 'Modifier' },
      { name: 'disabled', description: 'Select disabled', type: 'Modifier' },
      { name: 'disabledOptions', description: 'Select options disabled', type: 'Modifier', values: 'number[]' },
      { name: 'ghost', description: 'Select with `ghost` color', type: 'Modifier' },
      { name: 'primary', description: 'Select with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Select with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Select with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Select with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Select with `success` color', type: 'Modifier' },
      { name: 'error', description: 'Select with `error` color', type: 'Modifier' },
      { name: 'large', description: 'Select with size `large`', type: 'Modifier' },
      { name: 'medium', description: 'Select with size `medium`', type: 'Modifier' },
      { name: 'small', description: 'Select with size `small`', type: 'Modifier' },
      { name: 'tiny', description: 'Select with size `tiny`', type: 'Modifier' },
      { name: 'onChange', description: 'Select on change callback', type: 'Function' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Select</h1>
      <p>Select is used to pick a value from a list of options.</p>

      <DocuAttributes {...{ attributes }} />

      {selectCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
