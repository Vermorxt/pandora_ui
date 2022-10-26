import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { cardCodeExamples } from './card-code'

export const Ui_Docu_Card: FC = props => {
  console.log('card docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Card', description: 'Container element', type: 'Component', target: '' },
      { name: 'Ui_Card.Body', description: 'Card body element', type: 'Component', target: 'Ui_Card' },
      { name: 'Ui_Card.Title', description: 'Card title element', type: 'Component', target: 'Ui_Card.Body' },
      { name: 'Ui_Card.Actions', description: 'Card footer element', type: 'Component', target: 'Ui_Card.Body' },
      {
        name: 'compact',
        description: 'Card body with less padding',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'itemsCenter',
        description: 'Center card body items',
        type: 'Modifier',
        target: 'Ui_Card.Body',
      },
      {
        name: 'textCenter',
        description: 'Center card body text',
        type: 'Modifier',
        target: 'Ui_Card.Body',
      },
      {
        name: 'bgPrimary',
        description: 'Card with primary background color',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'textPrimaryContent',
        description: 'Card with primary text color',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'bgSecondary',
        description: 'Card with secondary background color',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'textSecondaryContent',
        description: 'Card with secondary text color',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'bgNeutral',
        description: 'Card with neutral background color',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'textNeutralContent',
        description: 'Card with neutral text color',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'imageAsBackground',
        description: 'Put image as background image with content overlay',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'bgBase',
        description: 'Background base color on card background. (Default 100 for all if not glass)',
        type: 'Modifier',
        values: '100, 200, 300',
        target: 'Ui_Card',
      },
      {
        name: 'glass',
        description: 'Glass background effect on card background',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'cardSide',
        description: 'Card image on left side besides content',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'cardSideLarge',
        description: 'Card image on left side besides content only for large screens',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'w96',
        description: 'Card width w96 as most used card width (24rem)',
        type: 'Modifier',
        target: 'Ui_Card',
      },
      {
        name: 'actionStart',
        description: 'Card with action content alignment start',
        type: 'Modifier',
        target: 'Ui_Card.Action',
      },
      {
        name: 'actionCenter',
        description: 'Card with action content alignment canter',
        type: 'Modifier',
        target: 'Ui_Card.Action',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Alert</h1>
      <p>Alert informs users about important events.</p>

      <DocuAttributes {...{ attributes }} />

      {cardCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
