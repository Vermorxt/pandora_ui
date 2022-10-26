import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { swapCodeExamples } from './swap-code'

export const Ui_Docu_Swap: FC = props => {
  console.log('swap docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Swap', description: 'Container element', type: 'Component' },
      {
        name: 'swapOn',
        description: 'The child element that should be visible when checkbox is checked or when swap is active',
        type: 'Modifier',
      },
      {
        name: 'swapOff',
        description: 'The child element that should be visible when checkbox is not checked or when swap is not active',
        type: 'Modifier',
      },
      {
        name: 'swapActive',
        description: 'Activates the swap',
        type: 'Modifier',
        values: 'off/on (default)',
      },
      {
        name: 'swapRotate',
        description: 'Adds rotate effect to swap',
        type: 'Modifier',
        values: 'true/false (default)',
      },
      {
        name: 'swapFlip',
        description: 'Adds flip effect to swap',
        type: 'Modifier',
        values: 'true/false (default)',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Swap</h1>
      <p>Swap allows you to toggle the visibility of two elements using a checkbox or a class name.</p>

      <DocuAttributes {...{ attributes }} />

      {swapCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
