import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC } from 'react'
import { avatarCodeExamples } from './avatar-code'

export const Ui_Avatar_Docu: FC = props => {
  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Avatar', description: 'Container element with default avatar image', type: 'Component' },
      { name: 'Ui_Avatar.Group', description: 'Container group element', type: 'Component' },
      { name: 'large', description: 'Large avatar', type: 'Responsive' },
      { name: 'medium', description: 'Medium avatar (default)', type: 'Responsive' },
      { name: 'small', description: 'Small avatar', type: 'Responsive' },
      { name: 'tiny', description: 'Extra small avatar', type: 'Responsive' },
      { name: 'src', description: 'Avatar image source', type: 'Modifier' },
      { name: 'roundedLg', description: 'Avatar border radius small border radius', type: 'Modifier' },
      { name: 'roundedXl', description: 'Avatar border radius medium border radius', type: 'Modifier' },
      { name: 'rounded2xl', description: 'Avatar border radius large border radius', type: 'Modifier' },
      { name: 'rounded3xl', description: 'Avatar border radius extra large border radius', type: 'Modifier' },
      { name: 'roundedFull', description: 'Avatar border radius full', type: 'Modifier' },
      { name: 'squircle', description: 'Avatar shape squircle', type: 'Modifier' },
      { name: 'hexagon', description: 'Avatar shape hexagon', type: 'Modifier' },
      { name: 'triangle', description: 'Avatar shape triangle', type: 'Modifier' },
      { name: 'usePlaceHolder', description: 'PlaceHolder instead of image', type: 'Modifier' },
      { name: 'online', description: 'Online indicator for avatar image', type: 'Modifier' },
      { name: 'offline', description: 'Offline indicator for avatar image', type: 'Modifier' },
      { name: 'ring', description: 'Outer ring for avatar', type: 'Modifier' },
      { name: 'ringPrimary', description: 'Outer ring primary color for avatar', type: 'Modifier' },
      { name: 'ringSecondary', description: 'Outer ring secondary color for avatar', type: 'Modifier' },
      { name: 'ringOffset', description: 'Outer ring space for avatar', type: 'Modifier', values: '0, 1, 2, 4 ,8' },
      {
        name: 'ringOffsetBackground',
        description: 'Outer ring offset color for avatar',
        type: 'Modifier',
        values: 'https://tailwindcss.com/docs/ring-offset-color',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Avatar</h1>
      <p>Avatars are used to show a thumbnail representation of an individual or business in the interface.</p>

      <DocuAttributes {...{ attributes }} />

      {avatarCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
