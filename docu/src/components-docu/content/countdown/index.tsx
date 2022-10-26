import { FC } from 'react'
import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { countdownCodeExamples } from './countdown-code'

export const Ui_Docu_Countdown: FC = props => {
  console.log('alert docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Countdown', description: 'Container element', type: 'Component' },
      {
        name: 'value',
        description: 'Star value for single countdown',
        type: 'Modifier',
      },
      {
        name: 'targetTime',
        description: 'Target time for countdown',
        type: 'Modifier',
        values: 'Date ISO-string',
      },
      {
        name: 'showTimeValues',
        description: 'Time parameter to display',
        type: 'Modifier',
        values: 'useValues: [day, hour, minute, second], displayValues: []',
      },
      {
        name: 'template',
        description: 'Template for countdown',
        type: 'Modifier',
        values: 'compact, inline, clock, boxed',
      },
      {
        name: 'large',
        description: 'Size of countdown',
        type: 'Modifier',
      },
      {
        name: 'medium',
        description: 'Size of countdown',
        type: 'Modifier',
      },
      {
        name: 'small',
        description: 'Size of countdown',
        type: 'Modifier',
      },
      {
        name: 'tiny',
        description: 'Size of countdown',
        type: 'Modifier',
      },
      {
        name: 'center',
        description: 'Center countdown items',
        type: 'Modifier',
      },
      {
        name: 'finishColor',
        description: 'Color of finished countdown (default green/#50C878)',
        type: 'Modifier',
      },
      {
        name: 'onFinishCallback',
        description: 'Callback function for finished countdown',
        type: 'Function',
        values: 'true',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Countdown</h1>
      <p>Countdown gives you a transition effect of changing numbers.</p>

      <DocuAttributes {...{ attributes }} />

      {countdownCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
