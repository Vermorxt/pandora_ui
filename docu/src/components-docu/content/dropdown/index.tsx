import { FC } from 'react'
import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { dropdownCodeExamples } from './dropdown-code'

export const Ui_Docu_Dropdown: FC = props => {
  console.log('dropdown docu')

  const attributes = {
    header: ['Attributes', 'Type', '', '', 'Description'],
    values: [
      { name: 'Ui_Dropdown', description: 'Dropdown element', type: 'Component' },
      { name: 'Ui_Dropdown.Label', description: 'Dropdown label element', type: 'Component' },
      { name: 'Ui_Dropdown.Content', description: 'Dropdown label element', type: 'Component' },
      { name: 'primary', description: 'Dropdown with `primary` color', type: 'Modifier' },
      { name: 'secondary', description: 'Dropdown with `secondary` color', type: 'Modifier' },
      { name: 'accent', description: 'Dropdown with `accent` color', type: 'Modifier' },
      { name: 'info', description: 'Dropdown with `info` color', type: 'Modifier' },
      { name: 'success', description: 'Dropdown with `success` color', type: 'Modifier' },
      { name: 'warning', description: 'Dropdown with `warning` color', type: 'Modifier' },
      { name: 'error', description: 'Dropdown with `error` color', type: 'Modifier' },
      { name: 'ghost', description: 'Dropdown with ghost style', type: 'Modifier' },
      { name: 'link', description: 'Dropdown styled as a link', type: 'Modifier' },
      { name: 'outline', description: 'Transparent Dropdown with colored border', type: 'Modifier' },
      { name: 'active', description: 'Force dropdown to show active state', type: 'Modifier' },
      { name: 'disabled', description: 'Force dropdown to show disabled state', type: 'Modifier' },
      { name: 'glass', description: 'Dropdown with a glass effect', type: 'Modifier' },
      { name: 'loading', description: 'Shows loading spinner', type: 'Modifier' },
      { name: 'noAnimation', description: 'Disables click animation', type: 'Modifier' },
      { name: 'hover', description: 'Hover dropdown to open context menu', type: 'Modifier' },
      { name: 'left', description: 'Dropdown context menu position left', type: 'Modifier' },
      { name: 'right', description: 'Dropdown context menu position right', type: 'Modifier' },
      { name: 'top', description: 'Dropdown context menu position top', type: 'Modifier' },
      { name: 'end', description: 'Dropdown context menu position end', type: 'Modifier' },
      { name: 'open', description: 'Dropdown force open', type: 'Modifier' },
      { name: 'large', description: 'Large dropdown', type: 'Responsive' },
      { name: 'medium', description: 'Medium dropdown (default)', type: 'Responsive' },
      { name: 'small', description: 'Small dropdown', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small dropdown', type: 'Responsive' },
      { name: 'wide', description: 'Wide dropdown (more horizontal padding)', type: 'Responsive' },
      { name: 'full', description: 'Full width dropdown', type: 'Responsive' },
      { name: 'circle', description: 'Circle dropdown with a 1:1 ratio', type: 'Responsive' },
      { name: 'square', description: 'Square dropdown with a 1:1 ratio', type: 'Responsive' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Dropdown</h1>
      <p>Dropdowns allows user to take actions or make choices.</p>

      <DocuAttributes {...{ attributes }} />

      {dropdownCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
