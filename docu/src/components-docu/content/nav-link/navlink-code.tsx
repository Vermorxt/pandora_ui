import { RoutesDocu } from '@/root/src/_enums/routes-docu'
import { Ui_NavLink } from '@vermorxt/pandora_ui'

export const navLinkCodeExamples = [
  {
    id: 'navLink_1',
    title: 'NavLink',
    preview: (
      <>
        <Ui_NavLink href={RoutesDocu.NavLink}>Nav link</Ui_NavLink>
      </>
    ),
    codeExample: `
<Ui_NavLink href="${RoutesDocu.NavLink}">Nav link</Ui_NavLink>`,
  },
  {
    id: 'navLink_2',
    title: 'NavLink with ui styles',
    preview: (
      <Ui_NavLink href={RoutesDocu.NavLink} primary>
        Nav link
      </Ui_NavLink>
    ),
    codeExample: `
<Ui_NavLink href={RoutesDocu.NavLink} primary>
  Nav link
</Ui_NavLink>`,
  },
]
