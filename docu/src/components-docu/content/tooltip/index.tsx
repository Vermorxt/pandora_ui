import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { tooltipCodeExamples } from './tooltip-code'

export const Ui_Docu_Tooltip: FC = props => {
  console.log('tooltip docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Tooltip', description: 'Tooltip element', type: 'Component' },
      { name: 'content', description: 'Tooltip content', type: 'Modifier' },
      { name: 'position', description: 'Tooltip position', type: 'Modifier', values: 'top, left, right, bottom' },
      {
        name: 'tooltip',
        description: 'Tooltip used as parameter for a component',
        type: 'Modifier',
        values: 'content, position',
      },
      { name: 'primary', description: 'Tooltip with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Tooltip with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Tooltip with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Tooltip with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Tooltip with `success` color', type: 'Modifier' },
      { name: 'warning', description: 'Tooltip with `warning` color', type: 'Modifier' },
      { name: 'error', description: 'Tooltip with `error` color', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Tooltip</h1>
      <p>Tooltip can be used to show a message when hovering over an element.</p>

      <DocuAttributes {...{ attributes }} />

      {tooltipCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
