import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { statCodeExamples } from './stat-code'

export const Ui_Docu_Stat: FC = props => {
  console.log('stat docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Stat', description: 'Container element', type: 'Component' },
      { name: 'Ui_Stat.Item', description: 'Stat item element', type: 'Component', target: 'Ui_Stat' },
      { name: 'Ui_Stat.Figure', description: 'Stat figure element', type: 'Component', target: 'Ui_Stat.Item' },
      { name: 'Ui_Stat.Title', description: 'Stat title element', type: 'Component', target: 'Ui_Stat.Item' },
      { name: 'Ui_Stat.Value', description: 'Stat value element', type: 'Component', target: 'Ui_Stat.Item' },
      {
        name: 'bgColor',
        description: 'Background color if items',
        type: 'Modifier',
        values: 'primary, secondary',
        target: 'Ui_Stat',
      },
      {
        name: 'textColor',
        description: 'Text color if items',
        type: 'Modifier',
        values: 'primary, secondary',
        target: 'Ui_Stat.Figure, Ui_Stat.Title, Ui_Stat.Value',
      },
      {
        name: 'center',
        description: 'Center items',
        type: 'Modifier',
        target: 'Ui_Stat.Item',
      },
      {
        name: 'vertical',
        description: 'Vertical items',
        type: 'Responsive',
        target: 'Ui_Stat',
      },
      {
        name: 'onLargeHorizontal',
        description: 'Vertical items on small screens only',
        type: 'Responsive',
        target: 'Ui_Stat',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Stat</h1>
      <p>Stat is used to show numbers and data in a box.</p>

      <DocuAttributes {...{ attributes }} />

      {statCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
