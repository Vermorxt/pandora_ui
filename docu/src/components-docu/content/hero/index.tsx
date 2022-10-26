import Code from '@/root/src/components/Code'
import { FC } from 'react'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { heroCodeExamples } from './hero-code'

export const Ui_Docu_Hero: FC = props => {
  console.log('Hero docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Hero', description: 'Hero element', type: 'Component' },
      { name: 'Ui_Hero.Overlay', description: 'Hero overlay', type: 'Component', target: 'Ui_Hero' },
      { name: 'Ui_Hero.Content', description: 'Hero content', type: 'Component', target: 'Ui_Hero' },
      { name: 'id', description: 'Hero id', type: 'Modifier' },
      { name: 'center', description: 'Hero centered', type: 'Modifier' },
      { name: 'centerItems', description: 'Hero items centered', type: 'Modifier' },
      {
        name: 'bgColor',
        description:
          'Hero background color (default: bg-base-100). See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      {
        name: 'shadow',
        description: 'Hero shadow (default: xl). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
        values: "'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean",
      },
      {
        name: 'rounded',
        description: 'Hero rounded corner (default: box). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Hero</h1>
      <p>Hero can contain logo, copyright notice, and links to other pages.</p>

      <DocuAttributes {...{ attributes }} />

      {heroCodeExamples?.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
