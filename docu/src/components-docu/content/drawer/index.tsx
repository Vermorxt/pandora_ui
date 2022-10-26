import { FC } from 'react'
import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { drawerCodeExamples } from './drawer-code'

export const Ui_Docu_Drawer: FC = props => {
  console.log('drawer docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Drawer', description: 'Drawer element', type: 'Component' },
      { name: 'Ui_Drawer.Content', description: 'Drawer content element', type: 'Component', target: 'Ui_Drawer' },
      { name: 'Ui_Drawer.Side', description: 'Drawer side element', type: 'Component', target: 'Ui_Drawer' },
      { name: 'id', description: 'Drawer id', type: 'Modifier' },
      {
        name: 'defaultOpenOnLargeScreen',
        description: 'Drawer side is opened by default on large screens and closed on mobile screens',
        type: 'Modifier',
      },
      { name: 'opensRight', description: 'Drawer side opens on right side', type: 'Modifier' },
      { name: 'menuItems', description: 'Menu items for side content as array', type: 'Modifier' },
      { name: 'isNavbar', description: 'Drawer is a navbar and handles sidebar', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Drawer</h1>
      <p>Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.</p>
      <p>
        Drawer sidebar can be visible by default on large screens or it can be toggled on both large and small screens.
      </p>

      <DocuAttributes {...{ attributes }} />

      {drawerCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
