import { Ui_Badge } from '@vermorxt/pandora_ui'
import { FC } from 'react'

export interface DocuAttributesProps {
  attributes: {
    header: string[]
    values: {
      name: string
      description?: string
      values?: string
      type?: string
      target?: string
    }[]
  }
}

const DocuAttributes: FC<DocuAttributesProps> = ({ attributes }) => (
  <div className="not-prose mt-6 mb-10 overflow-x-auto">
    <table className="table-compact table w-full">
      <thead>
        <tr>
          {attributes.header.map((head, index) => (
            <th key={index} className={`${index === 0 ? 'flex items-center gap-2 normal-case' : 'normal-case'}`}>
              <span>{head}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {attributes.values.map((value, index) => (
          <tr key={`tr_${index}`}>
            <th className="font-normal">
              <span>{value.name}</span>
            </th>
            <td>
              {value.type === 'Component' && (
                <Ui_Badge small warning outline>
                  {value.type}
                </Ui_Badge>
              )}
              {value.type === 'Function' && (
                <Ui_Badge small error outline>
                  {value.type}
                </Ui_Badge>
              )}
              {value.type === 'Modifier' && (
                <Ui_Badge small outline>
                  {value.type}
                </Ui_Badge>
              )}
              {value.type === 'Responsive' && (
                <Ui_Badge small outline success>
                  {value.type}
                </Ui_Badge>
              )}
            </td>
            <td>{value.target}</td>
            <td>{value.values}</td>
            <td style={{ whiteSpace: 'normal' }}>{value.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default DocuAttributes
