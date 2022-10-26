import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { collapseCodeExamples } from './collapse-code'

export const Ui_Docu_Collapse: FC = props => {
  console.log('collapse docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Collapse', description: 'Container element', type: 'Component' },
      { name: 'Ui_Collapse.Title', description: 'Collapse title element', type: 'Component', target: 'Ui_Collapse' },
      {
        name: 'Ui_Collapse.Content',
        description: 'Collapse content element',
        type: 'Component',
        target: 'Ui_Collapse',
      },
      {
        name: 'focus',
        description: 'Collapse with focus as trigger to open, closing content',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'border',
        description: 'Collapse with border',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'rounded',
        description: 'Collapse with round corners',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'arrow',
        description: 'Collapse with arrow indicator',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'plus',
        description: 'Collapse with plus/minus indicator',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'close',
        description: 'Collapse forcing closed content',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'open',
        description: 'Collapse forcing opened content',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'defaultOpen',
        description: 'Collapse forcing default open content',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'group',
        description:
          'Collapse with colored content, used for bg color on open as wrapper. Only needed if "focus" and "bgColor" or/and "bgColorOpened" is set.',
        type: 'Modifier',
        target: 'Ui_Collapse',
      },
      {
        name: 'bgColor',
        description: 'Collapse closed bg-color',
        type: 'Modifier',
        values: 'primary, secondary',
        target: 'Ui_Collapse.Title, Ui_Collapse.Content',
      },
      {
        name: 'bgColorOpened',
        description: 'Collapse content and title open color',
        type: 'Modifier',
        values: 'primary, secondary',
        target: 'Ui_Collapse.Title, Ui_Collapse.Content',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Collapse</h1>
      <p>Collapse is used for showing and hiding content.</p>

      <DocuAttributes {...{ attributes }} />

      {collapseCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
