import Code from '@/root/src/components/Code'
import DocuAttributes from '../../controller/DocuAttributes'
import DocuWrapper from '../../controller/DocuWrapper'
import { FC, useEffect, useState } from 'react'
import { provideTableData } from './table-code'
import { cancellableAxios } from '@/root/src/_axios/axios.interceptor'
import { ApiData } from '@/root/src/_types/api-responses'
import { TableExampleInterface } from '@/root/src/_types/TableExpample'

export const API_DATA_TABLE_DUMMY = 'https://my.api.mockaroo.com/users.json?key=b7e8a210'

export const Ui_Docu_Table: FC = props => {
  const [tableData, setTableData] = useState<any[]>([])
  const [tableExamples, setTableExamples] = useState<TableExampleInterface[]>([])

  console.log('table docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Table', description: 'Container element', type: 'Component' },
      { name: 'Ui_Table.Head', description: 'Table head element', type: 'Component', target: 'Ui_Table' },
      { name: 'Ui_Table.Footer', description: 'Table footer element', type: 'Component', target: 'Ui_Table' },
      { name: 'Ui_Table.Body', description: 'Table body element', type: 'Component', target: 'Ui_Table' },
      {
        name: 'Ui_Table.Row',
        description: 'Table body element',
        type: 'Component',
        target: 'Ui_Table.Head, Ui_Table.Body',
      },
      { name: 'Ui_Table.Th', description: 'Table head cell element', type: 'Component', target: 'Ui_Table.Row' },
      { name: 'Ui_Table.Td', description: 'Table cell element', type: 'Component', target: 'Ui_Table.Row' },
      {
        name: 'bgColor',
        description: 'Background color if items',
        type: 'Modifier',
        values: 'primary, secondary',
        target: 'Ui_Table.Th, Ui_Table.Td',
      },
      {
        name: 'textColor',
        description: 'Text color if items',
        type: 'Modifier',
        values: 'primary, secondary',
        target: 'Ui_Table.Th, Ui_Table.Td',
      },
      {
        name: 'active',
        description: 'Active row',
        type: 'Modifier',
        target: 'Ui_Table.Row',
      },
      {
        name: 'zebra',
        description: 'Highlight odd rows',
        type: 'Modifier',
        target: 'Ui_Table.Row',
      },
      {
        name: 'hover',
        description: 'Active on hover row',
        type: 'Modifier',
        target: 'Ui_Table.Row',
      },
    ],
  }

  useEffect(() => {
    if (tableData.length > 0) return

    const tableExamplesWithOutFetchedData = provideTableData([])
    setTableExamples([...tableExamplesWithOutFetchedData])

    const apiResponse = cancellableAxios({ url: `${API_DATA_TABLE_DUMMY}` })
      .then((fetchedData: ApiData) => {
        if (!fetchedData) return
        const dataResponse = fetchedData as unknown as any[]

        if (dataResponse) {
          const tableExamplesWithFetchedData = provideTableData(dataResponse)
          setTableExamples([...tableExamplesWithFetchedData])
          setTableData([...dataResponse])
        }
      })
      .catch(error => console.error('failed get data: ', error))

    return apiResponse.cancel
  }, [])

  return (
    <DocuWrapper>
      <h1>Table</h1>
      <p>Table can be used to show a list of data in a table format.</p>

      <DocuAttributes {...{ attributes }} />

      {tableExamples?.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
