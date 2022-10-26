import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { menuCodeExamples } from './menu-code'

export const Ui_Docu_Menu: FC = props => {
  console.log('menu docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Menu', description: 'Menu element', type: 'Component' },
      { name: 'horizontal', description: 'Menu horizontal', type: 'Modifier' },
      {
        name: 'bgColor',
        description:
          'Menu background color (default: bg-base-100). See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      {
        name: 'shadow',
        description: 'Menu shadow (default: xl). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
        values: "'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean",
      },
      {
        name: 'rounded',
        description: 'Menu rounded corner (default: box). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Menu</h1>
      <p>Menu is used to display a list of links vertically or horizontally.</p>

      <DocuAttributes {...{ attributes }} />

      {menuCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
