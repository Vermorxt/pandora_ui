import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { indicatorCodeExamples } from './indicator-code'

export const Ui_Docu_Indicator: FC = props => {
  console.log('indicator docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Indicator', description: 'Indicator element', type: 'Component' },
      {
        name: 'Ui_Indicator.Item',
        description: 'Indicator item element',
        type: 'Component',
        target: 'Ui_Indicator',
      },
      { name: 'badge', description: 'Indicator with badge design', type: 'Modifier', target: 'Ui_Indicator.Item' },
      { name: 'top', description: 'Indicator position top', type: 'Modifier', target: 'Ui_Indicator.Item' },
      { name: 'bottom', description: 'Indicator position bottom', type: 'Modifier', target: 'Ui_Indicator.Item' },
      { name: 'middle', description: 'Indicator position middle', type: 'Modifier', target: 'Ui_Indicator.Item' },
      { name: 'center', description: 'Indicator position center', type: 'Modifier', target: 'Ui_Indicator.Item' },
      { name: 'start', description: 'Indicator position start', type: 'Modifier', target: 'Ui_Indicator.Item' },
      { name: 'end', description: 'Indicator position end', type: 'Modifier', target: 'Ui_Indicator.Item' },
      {
        name: 'color',
        description:
          'Indicator color. See available colors: see: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
        target: 'Ui_Indicator.Item',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Indicator</h1>
      <p>Indicators are used to place an element on the corner of another element.</p>

      <DocuAttributes {...{ attributes }} />

      {indicatorCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
