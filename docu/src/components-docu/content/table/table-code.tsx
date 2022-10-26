import { Ui_Avatar, Ui_Button, Ui_Flex } from '@vermorxt/pandora_ui'

import { Ui_Table } from '@vermorxt/pandora_ui'
import { API_DATA_TABLE_DUMMY } from '.'

export const provideTableData = (tableData: any[]) => {
  const tableCodeExamples = [
    {
      id: 'table_1',
      title: 'Table Simple',
      preview: (
        <Ui_Table>
          <Ui_Table.Head>
            <Ui_Table.Row>
              <Ui_Table.Td>Name</Ui_Table.Td>
              <Ui_Table.Td>Job</Ui_Table.Td>
              <Ui_Table.Td>Color</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Head>
          <Ui_Table.Body>
            <Ui_Table.Row>
              <Ui_Table.Td>Joe</Ui_Table.Td>
              <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
              <Ui_Table.Td>blue</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>Karl</Ui_Table.Td>
              <Ui_Table.Td textColor="primary">Desktop Support Technician</Ui_Table.Td>
              <Ui_Table.Td bgColor="primary">purple</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>Lars</Ui_Table.Td>
              <Ui_Table.Td textColor="secondary">Tax Accountant</Ui_Table.Td>
              <Ui_Table.Td bgColor="secondary">pink</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Body>
        </Ui_Table>
      ),
      codeExample: `
<Ui_Table>
  <Ui_Table.Head>
    <Ui_Table.Row>
      <Ui_Table.Td>Name</Ui_Table.Td>
      <Ui_Table.Td>Job</Ui_Table.Td>
      <Ui_Table.Td>Color</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Head>
  <Ui_Table.Body>
    <Ui_Table.Row>
      <Ui_Table.Td>Joe</Ui_Table.Td>
      <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
      <Ui_Table.Td>blue</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>Karl</Ui_Table.Td>
      <Ui_Table.Td textColor="primary">Desktop Support Technician</Ui_Table.Td>
      <Ui_Table.Td bgColor="primary">purple</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>Lars</Ui_Table.Td>
      <Ui_Table.Td textColor="secondary">Tax Accountant</Ui_Table.Td>
      <Ui_Table.Td bgColor="secondary">pink</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Body>
</Ui_Table>`,
    },
    {
      id: 'table_2',
      title: 'Table with an active row',
      preview: (
        <Ui_Table>
          <Ui_Table.Head>
            <Ui_Table.Row>
              <Ui_Table.Td>Name</Ui_Table.Td>
              <Ui_Table.Td>Job</Ui_Table.Td>
              <Ui_Table.Td>Color</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Head>
          <Ui_Table.Body>
            <Ui_Table.Row>
              <Ui_Table.Td>Joe</Ui_Table.Td>
              <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
              <Ui_Table.Td>blue</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row active>
              <Ui_Table.Td>Karl</Ui_Table.Td>
              <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
              <Ui_Table.Td>red</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>Lars</Ui_Table.Td>
              <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
              <Ui_Table.Td>gold</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Body>
        </Ui_Table>
      ),
      codeExample: `
<Ui_Table>
  <Ui_Table.Head>
    <Ui_Table.Row>
      <Ui_Table.Td>Name</Ui_Table.Td>
      <Ui_Table.Td>Job</Ui_Table.Td>
      <Ui_Table.Td>Color</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Head>
  <Ui_Table.Body>
    <Ui_Table.Row>
      <Ui_Table.Td>Joe</Ui_Table.Td>
      <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
      <Ui_Table.Td>blue</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row active>
      <Ui_Table.Td>Karl</Ui_Table.Td>
      <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
      <Ui_Table.Td>red</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>Lars</Ui_Table.Td>
      <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
      <Ui_Table.Td>gold</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Body>
</Ui_Table>`,
    },
    {
      id: 'table_3',
      title: 'Table with a row that highlights on hover',
      preview: (
        <Ui_Table>
          <Ui_Table.Head>
            <Ui_Table.Row>
              <Ui_Table.Td>Name</Ui_Table.Td>
              <Ui_Table.Td>Job</Ui_Table.Td>
              <Ui_Table.Td>Color</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Head>
          <Ui_Table.Body>
            <Ui_Table.Row>
              <Ui_Table.Td>Joe</Ui_Table.Td>
              <Ui_Table.Td>Dancer</Ui_Table.Td>
              <Ui_Table.Td>blue</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row hover>
              <Ui_Table.Td>Karl</Ui_Table.Td>
              <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
              <Ui_Table.Td>red</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>Lars</Ui_Table.Td>
              <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
              <Ui_Table.Td>gold</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Body>
        </Ui_Table>
      ),
      codeExample: `
<Ui_Table>
  <Ui_Table.Head>
    <Ui_Table.Row>
      <Ui_Table.Td>Name</Ui_Table.Td>
      <Ui_Table.Td>Job</Ui_Table.Td>
      <Ui_Table.Td>Color</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Head>
  <Ui_Table.Body>
    <Ui_Table.Row>
      <Ui_Table.Td>Joe</Ui_Table.Td>
      <Ui_Table.Td>Dancer</Ui_Table.Td>
      <Ui_Table.Td>blue</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row hover>
      <Ui_Table.Td>Karl</Ui_Table.Td>
      <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
      <Ui_Table.Td>red</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>Lars</Ui_Table.Td>
      <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
      <Ui_Table.Td>gold</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Body>
</Ui_Table>`,
    },
    {
      id: 'table_4',
      title: 'Zebra',
      preview: (
        <Ui_Table zebra>
          <Ui_Table.Head>
            <Ui_Table.Row>
              <Ui_Table.Td>Name</Ui_Table.Td>
              <Ui_Table.Td>Job</Ui_Table.Td>
              <Ui_Table.Td>Color</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Head>
          <Ui_Table.Body>
            <Ui_Table.Row>
              <Ui_Table.Td>Joe</Ui_Table.Td>
              <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
              <Ui_Table.Td>blue</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>Karl</Ui_Table.Td>
              <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
              <Ui_Table.Td>red</Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>Lars</Ui_Table.Td>
              <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
              <Ui_Table.Td>gold</Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Body>
        </Ui_Table>
      ),
      codeExample: `
<Ui_Table zebra>
  <Ui_Table.Head>
    <Ui_Table.Row>
      <Ui_Table.Td>Name</Ui_Table.Td>
      <Ui_Table.Td>Job</Ui_Table.Td>
      <Ui_Table.Td>Color</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Head>
  <Ui_Table.Body>
    <Ui_Table.Row>
      <Ui_Table.Td>Joe</Ui_Table.Td>
      <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
      <Ui_Table.Td>blue</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>Karl</Ui_Table.Td>
      <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
      <Ui_Table.Td>red</Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>Lars</Ui_Table.Td>
      <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
      <Ui_Table.Td>gold</Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Body>
</Ui_Table>`,
    },
    {
      id: 'table_5',
      title: 'Table with visual elements',
      preview: (
        <Ui_Table>
          <Ui_Table.Head>
            <Ui_Table.Row>
              <Ui_Table.Td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </Ui_Table.Td>
              <Ui_Table.Td>Name</Ui_Table.Td>
              <Ui_Table.Td>Job</Ui_Table.Td>
              <Ui_Table.Td>Color</Ui_Table.Td>
              <Ui_Table.Td></Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Head>
          <Ui_Table.Body>
            <Ui_Table.Row>
              <Ui_Table.Td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </Ui_Table.Td>
              <Ui_Table.Td>
                <Ui_Flex>
                  <Ui_Avatar mini squircle src="https://api.lorem.space/image/face?hash=88560" />
                  <div style={{ marginLeft: 15 }}>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </Ui_Flex>
              </Ui_Table.Td>
              <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
              <Ui_Table.Td>blue</Ui_Table.Td>
              <Ui_Table.Td>
                <Ui_Button ghost tiny>
                  details
                </Ui_Button>
              </Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </Ui_Table.Td>
              <Ui_Table.Td>
                <Ui_Flex>
                  <Ui_Avatar mini squircle src="https://api.lorem.space/image/face?hash=88562" />
                  <div style={{ marginLeft: 15 }}>
                    <div className="font-bold">Karl Hagerty</div>
                    <div className="text-sm opacity-50">Germany</div>
                  </div>
                </Ui_Flex>
              </Ui_Table.Td>
              <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
              <Ui_Table.Td>red</Ui_Table.Td>
              <Ui_Table.Td>
                <Ui_Button ghost tiny>
                  details
                </Ui_Button>
              </Ui_Table.Td>
            </Ui_Table.Row>
            <Ui_Table.Row>
              <Ui_Table.Td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </Ui_Table.Td>
              <Ui_Table.Td>
                <Ui_Flex>
                  <Ui_Avatar mini squircle src="https://api.lorem.space/image/face?hash=88564" />
                  <div style={{ marginLeft: 15 }}>
                    <div className="font-bold">Lars Hagerty</div>
                    <div className="text-sm opacity-50">Columbia</div>
                  </div>
                </Ui_Flex>
              </Ui_Table.Td>
              <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
              <Ui_Table.Td>gold</Ui_Table.Td>
              <Ui_Table.Td>
                <Ui_Button ghost tiny>
                  details
                </Ui_Button>
              </Ui_Table.Td>
            </Ui_Table.Row>
          </Ui_Table.Body>
        </Ui_Table>
      ),
      codeExample: `
<Ui_Table>
  <Ui_Table.Head>
    <Ui_Table.Row>
      <Ui_Table.Td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </Ui_Table.Td>
      <Ui_Table.Td>Name</Ui_Table.Td>
      <Ui_Table.Td>Job</Ui_Table.Td>
      <Ui_Table.Td>Color</Ui_Table.Td>
      <Ui_Table.Td></Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Head>
  <Ui_Table.Body>
    <Ui_Table.Row>
      <Ui_Table.Td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </Ui_Table.Td>
      <Ui_Table.Td>
        <Ui_Flex>
          <Ui_Avatar mini squircle src="https://api.lorem.space/image/face?hash=88560" />
          <div style={{ marginLeft: 15 }}>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </Ui_Flex>
      </Ui_Table.Td>
      <Ui_Table.Td>Quality Control Specialist</Ui_Table.Td>
      <Ui_Table.Td>blue</Ui_Table.Td>
      <Ui_Table.Td>
        <Ui_Button ghost tiny>
          details
        </Ui_Button>
      </Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </Ui_Table.Td>
      <Ui_Table.Td>
        <Ui_Flex>
          <Ui_Avatar mini squircle src="https://api.lorem.space/image/face?hash=88562" />
          <div style={{ marginLeft: 15 }}>
            <div className="font-bold">Karl Hagerty</div>
            <div className="text-sm opacity-50">Germany</div>
          </div>
        </Ui_Flex>
      </Ui_Table.Td>
      <Ui_Table.Td>Desktop Support Technician</Ui_Table.Td>
      <Ui_Table.Td>red</Ui_Table.Td>
      <Ui_Table.Td>
        <Ui_Button ghost tiny>
          details
        </Ui_Button>
      </Ui_Table.Td>
    </Ui_Table.Row>
    <Ui_Table.Row>
      <Ui_Table.Td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </Ui_Table.Td>
      <Ui_Table.Td>
        <Ui_Flex>
          <Ui_Avatar mini squircle src="https://api.lorem.space/image/face?hash=88564" />
          <div style={{ marginLeft: 15 }}>
            <div className="font-bold">Lars Hagerty</div>
            <div className="text-sm opacity-50">Columbia</div>
          </div>
        </Ui_Flex>
      </Ui_Table.Td>
      <Ui_Table.Td>Tax Accountant</Ui_Table.Td>
      <Ui_Table.Td>gold</Ui_Table.Td>
      <Ui_Table.Td>
        <Ui_Button ghost tiny>
          details
        </Ui_Button>
      </Ui_Table.Td>
    </Ui_Table.Row>
  </Ui_Table.Body>
</Ui_Table>`,
    },
    {
      id: 'table_6',
      title: 'Compact table',
      preview: (
        <div style={{ height: 400, overflow: 'scroll', width: '100%' }}>
          <Ui_Table compact>
            <Ui_Table.Head>
              <Ui_Table.Row>
                <Ui_Table.Th stickyHeader> </Ui_Table.Th>
                <Ui_Table.Th stickyHeader>First name</Ui_Table.Th>
                <Ui_Table.Th stickyHeader>Last name</Ui_Table.Th>
                <Ui_Table.Th stickyHeader>Email</Ui_Table.Th>
                <Ui_Table.Th stickyHeader>Gender</Ui_Table.Th>
                <Ui_Table.Th stickyHeader> </Ui_Table.Th>
                <Ui_Table.Th stickyHeader> </Ui_Table.Th>
              </Ui_Table.Row>
            </Ui_Table.Head>
            <Ui_Table.Body>
              {tableData.length <= 0 && (
                <Ui_Table.Row>
                  <Ui_Table.Td colSpan={99}>
                    <Ui_Button disabled loading style={{ margin: '10px auto', display: 'flex' }}>
                      Loading ...
                    </Ui_Button>
                  </Ui_Table.Td>
                </Ui_Table.Row>
              )}

              {tableData.length > 0 &&
                tableData.map((data, index) => (
                  <Ui_Table.Row key={index}>
                    <Ui_Table.Td>
                      <label>
                        <input type="checkbox" className="checkbox checkbox-xs" />
                      </label>
                    </Ui_Table.Td>
                    <Ui_Table.Td>{data?.first_name}</Ui_Table.Td>
                    <Ui_Table.Td>{data?.last_name}</Ui_Table.Td>
                    <Ui_Table.Td>{data?.email}</Ui_Table.Td>
                    <Ui_Table.Td>{data?.gender}</Ui_Table.Td>
                    <Ui_Table.Td>{data?.ip}</Ui_Table.Td>
                    <Ui_Table.Td>
                      <Ui_Button ghost tiny>
                        details
                      </Ui_Button>
                    </Ui_Table.Td>
                  </Ui_Table.Row>
                ))}
            </Ui_Table.Body>
            <Ui_Table.Footer>
              <Ui_Table.Row>
                <Ui_Table.Td> </Ui_Table.Td>
                <Ui_Table.Td>First name</Ui_Table.Td>
                <Ui_Table.Td>Last name</Ui_Table.Td>
                <Ui_Table.Td>Email</Ui_Table.Td>
                <Ui_Table.Td>Gender</Ui_Table.Td>
                <Ui_Table.Td> </Ui_Table.Td>
                <Ui_Table.Td> </Ui_Table.Td>
              </Ui_Table.Row>
            </Ui_Table.Footer>
          </Ui_Table>
        </div>
      ),
      codeExample: `
// tableData = ${API_DATA_TABLE_DUMMY}

<div style={{ height: 400, overflow: 'scroll', width: '100%' }}>
  <Ui_Table compact>
    <Ui_Table.Head>
      <Ui_Table.Row>
        <Ui_Table.Th stickyHeader> </Ui_Table.Th>
        <Ui_Table.Th stickyHeader>First name</Ui_Table.Th>
        <Ui_Table.Th stickyHeader>Last name</Ui_Table.Th>
        <Ui_Table.Th stickyHeader>Email</Ui_Table.Th>
        <Ui_Table.Th stickyHeader>Gender</Ui_Table.Th>
        <Ui_Table.Th stickyHeader> </Ui_Table.Th>
        <Ui_Table.Th stickyHeader> </Ui_Table.Th>
      </Ui_Table.Row>
    </Ui_Table.Head>
    <Ui_Table.Body>
      {tableData.length <= 0 && (
        <Ui_Table.Row>
          <Ui_Table.Td colSpan={99}>
            <Ui_Button disabled loading style={{ margin: '10px auto', display: 'flex' }}>
              Loading ...
            </Ui_Button>
          </Ui_Table.Td>
        </Ui_Table.Row>
      )}
      {tableData.length > 0 &&
        tableData.map((data, index) => (
          <Ui_Table.Row key={index}>
            <Ui_Table.Td>
              <label>
                <input type="checkbox" className="checkbox checkbox-xs" />
              </label>
            </Ui_Table.Td>
            <Ui_Table.Td>{data?.first_name}</Ui_Table.Td>
            <Ui_Table.Td>{data?.last_name}</Ui_Table.Td>
            <Ui_Table.Td>{data?.email}</Ui_Table.Td>
            <Ui_Table.Td>{data?.gender}</Ui_Table.Td>
            <Ui_Table.Td>{data?.ip}</Ui_Table.Td>
            <Ui_Table.Td>
              <Ui_Button ghost tiny>
                details
              </Ui_Button>
            </Ui_Table.Td>
          </Ui_Table.Row>
        ))}
    </Ui_Table.Body>
    <Ui_Table.Footer>
      <Ui_Table.Row>
        <Ui_Table.Td> </Ui_Table.Td>
        <Ui_Table.Td>First name</Ui_Table.Td>
        <Ui_Table.Td>Last name</Ui_Table.Td>
        <Ui_Table.Td>Email</Ui_Table.Td>
        <Ui_Table.Td>Gender</Ui_Table.Td>
        <Ui_Table.Td> </Ui_Table.Td>
        <Ui_Table.Td> </Ui_Table.Td>
      </Ui_Table.Row>
    </Ui_Table.Footer>
  </Ui_Table>
</div>`,
    },
  ]

  return tableCodeExamples
}
