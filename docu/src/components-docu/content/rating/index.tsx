import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { ratingCodeExamples } from './rating-code'

export const Ui_Docu_Rating: FC = props => {
  console.log('rating docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Rating', description: 'Rating element', type: 'Component' },
      { name: 'name', description: 'Name of ratings', type: 'Modifier' },
      {
        name: 'color',
        description:
          'Rating with color. See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      { name: 'halfSymbol', description: 'Rating with half symbols', type: 'Modifier' },
      { name: 'shape', description: 'Rating shape', type: 'Modifier', values: 'heart, star (default) ' },
      { name: 'disabled', description: 'Rating disabled', type: 'Modifier' },
      { name: 'defaultCheckedValue', description: 'Rating initial value', type: 'Modifier' },
      { name: 'onChange', description: 'Provides rating value on change', type: 'Function' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Rating</h1>
      <p>Ratings are used to inform user of the status of specific data.</p>

      <DocuAttributes {...{ attributes }} />

      {ratingCodeExamples.map((example, index) => (
        <Code
          key={index}
          id={example.id}
          title={example.title}
          preview={example.preview}
          codeExample={example.codeExample}
        />
      ))}
    </DocuWrapper>
  )
}
