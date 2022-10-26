import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { maskCodeExamples } from './mask-code'

export const Ui_Docu_Mask: FC = props => {
  console.log('mask docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Mask', description: 'Mask element', type: 'Component' },
      { name: 'squircle', description: 'Mask squircle shape', type: 'Modifier' },
      { name: 'heart', description: 'Mask squircle heart', type: 'Modifier' },
      { name: 'hexagon', description: 'Mask squircle hexagon', type: 'Modifier' },
      { name: 'hexagon2', description: 'Mask squircle hexagon2', type: 'Modifier' },
      { name: 'parallelogram', description: 'Mask squircle parallelogram', type: 'Modifier' },
      { name: 'parallelogram2', description: 'Mask squircle parallelogram2', type: 'Modifier' },
      { name: 'parallelogram3', description: 'Mask squircle parallelogram3', type: 'Modifier' },
      { name: 'parallelogram4', description: 'Mask squircle parallelogram4', type: 'Modifier' },
      { name: 'star', description: 'Mask squircle star', type: 'Modifier' },
      { name: 'star2', description: 'Mask squircle star2', type: 'Modifier' },
      { name: 'triangle', description: 'Mask squircle triangle', type: 'Modifier' },
      { name: 'triangle2', description: 'Mask squircle triangle2', type: 'Modifier' },
      { name: 'triangle3', description: 'Mask squircle triangle3', type: 'Modifier' },
      { name: 'triangle4', description: 'Mask squircle triangle4', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Mask</h1>
      <p>Mask provides fixed size container to display a demo content on mobile size.</p>

      <DocuAttributes {...{ attributes }} />

      {maskCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
