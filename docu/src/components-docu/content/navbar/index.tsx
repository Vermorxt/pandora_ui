import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { navbarCodeExamples } from './navbar-code'

export const Ui_Docu_Navbar: FC = props => {
  console.log('navbar docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Navbar', description: 'Navbar element', type: 'Component' },
      { name: 'Ui_Navbar.Start', description: 'Navbar start element', type: 'Component', target: 'Ui_Navbar' },
      { name: 'Ui_Navbar.Center', description: 'Navbar center element', type: 'Component', target: 'Ui_Navbar' },
      { name: 'Ui_Navbar.End', description: 'Navbar end element', type: 'Component', target: 'Ui_Navbar' },
      {
        name: 'bgColor',
        description:
          'Navbar background color (default: bg-base-100). See: https://tailwindcss.com/docs/background-color#setting-the-background-color',
        type: 'Modifier',
      },
      {
        name: 'shadow',
        description: 'Navbar shadow (default: xl). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
        values: "'sm' | 'lg' | 'xl' | '2xl' | 'md' | 'none' | boolean",
      },
      {
        name: 'rounded',
        description: 'Navbar rounded corner (default: box). See: https://tailwindcss.com/docs/box-shadow-color',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Navbar</h1>
      <p>Navbar is a grid layout that can show/hide a sidebar on the left or right side of the page.</p>

      <DocuAttributes {...{ attributes }} />

      {navbarCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
