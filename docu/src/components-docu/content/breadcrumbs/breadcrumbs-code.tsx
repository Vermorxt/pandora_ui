import { FolderAddIcon, FolderIcon } from '@heroicons/react/solid'
import { Ui_Breadcrumbs } from '@vermorxt/pandora_ui'

export const breadcrumbsCodeExamples = [
  {
    id: 'breadcrumbs_1',
    title: 'Breadcrumbs simple',
    preview: (
      <Ui_Breadcrumbs small>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </Ui_Breadcrumbs>
    ),
    codeExample: `
<Ui_Breadcrumbs small>
  <ul>
    <li>
      <a>Home</a>
    </li>
    <li>
      <a>Documents</a>
    </li>
    <li>Add Document</li>
  </ul>
</Ui_Breadcrumbs>`,
  },
  {
    id: 'breadcrumbs_1',
    title: 'Breadcrumbs with icons',
    preview: (
      <Ui_Breadcrumbs small>
        <ul>
          <li>
            <a>
              <FolderIcon className="w-5 mr-1" />
              Home
            </a>
          </li>
          <li>
            <a>
              <FolderIcon className="w-5 mr-1" />
              Documents
            </a>
          </li>
          <li>
            <FolderAddIcon className="w-5 mr-1" />
            Add Document
          </li>
        </ul>
      </Ui_Breadcrumbs>
    ),
    codeExample: `
<Ui_Breadcrumbs small>
  <ul>
    <li>
      <a>
        <FolderIcon className="w-5 mr-1" />
        Home
      </a>
    </li>
    <li>
      <a>
        <FolderIcon className="w-5 mr-1" />
        Documents
      </a>
    </li>
    <li>
      <FolderAddIcon className="w-5 mr-1" />
      Add Document
    </li>
  </ul>
</Ui_Breadcrumbs>`,
  },
  {
    id: 'breadcrumbs_1',
    title: 'Breadcrumbs with max-width',
    description: 'If you set max-width or the list gets larger than the container it will scroll',
    preview: (
      <Ui_Breadcrumbs small className="max-w-xs">
        <ul>
          <li>Long text 1</li>
          <li>Long text 2</li>
          <li>Long text 3</li>
          <li>Long text 4</li>
          <li>Long text 5</li>
        </ul>
      </Ui_Breadcrumbs>
    ),
    codeExample: `
<Ui_Breadcrumbs small className="max-w-xs">
  <ul>
    <li>Long text 1</li>
    <li>Long text 2</li>
    <li>Long text 3</li>
    <li>Long text 4</li>
    <li>Long text 5</li>
  </ul>
</Ui_Breadcrumbs>`,
  },
]
