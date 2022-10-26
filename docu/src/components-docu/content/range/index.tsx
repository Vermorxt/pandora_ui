import { FC } from 'react'
import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { rangeCodeExamples } from './range-code'

export const Ui_Docu_Range: FC = props => {
  console.log('range docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Range', description: 'Range element', type: 'Component' },
      { name: 'value', description: 'Range value', type: 'Modifier' },
      { name: 'label', description: 'Range label', type: 'Modifier' },
      { name: 'altLabel', description: 'Range alternative label', type: 'Modifier' },
      { name: 'disabled', description: 'Range disabled', type: 'Modifier' },
      { name: 'primary', description: 'Range with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Range with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Range with `accent` color', type: 'Modifier' },
      { name: 'large', description: 'Range with size `large`', type: 'Modifier' },
      { name: 'medium', description: 'Range with size `medium`', type: 'Modifier' },
      { name: 'small', description: 'Range with size `small`', type: 'Modifier' },
      { name: 'tiny', description: 'Range with size `tiny`', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Range</h1>
      <p>Range slider is used to select a value by sliding a handle.</p>

      <DocuAttributes {...{ attributes }} />

      {rangeCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
