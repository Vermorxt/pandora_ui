import { Ui_Tabs } from '@vermorxt/pandora_ui'

export const tabsCodeExamples = [
  {
    id: 'steps_1',
    title: 'Tabs simple',
    preview: (
      <>
        <Ui_Tabs>
          <Ui_Tabs.Tab>Tab 1</Ui_Tabs.Tab>
          <Ui_Tabs.Tab active>Tab 2</Ui_Tabs.Tab>
          <Ui_Tabs.Tab>Tab 3</Ui_Tabs.Tab>
        </Ui_Tabs>
      </>
    ),
    codeExample: `
<Ui_Tabs>
  <Ui_Tabs.Tab>Tab 1</Ui_Tabs.Tab>
  <Ui_Tabs.Tab active>Tab 2</Ui_Tabs.Tab>
  <Ui_Tabs.Tab>Tab 3</Ui_Tabs.Tab>
</Ui_Tabs>`,
  },
  {
    id: 'steps_2',
    title: 'Tabs bordered',
    preview: (
      <>
        <Ui_Tabs>
          <Ui_Tabs.Tab bordered>Tab 1</Ui_Tabs.Tab>
          <Ui_Tabs.Tab active bordered>
            Tab 2
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab bordered>Tab 3</Ui_Tabs.Tab>
        </Ui_Tabs>
      </>
    ),
    codeExample: `
<Ui_Tabs>
  <Ui_Tabs.Tab bordered>Tab 1</Ui_Tabs.Tab>
  <Ui_Tabs.Tab active bordered>
    Tab 2
  </Ui_Tabs.Tab>
  <Ui_Tabs.Tab bordered>Tab 3</Ui_Tabs.Tab>
</Ui_Tabs>`,
  },
  {
    id: 'steps_3',
    title: 'Tabs lifted',
    preview: (
      <>
        <Ui_Tabs>
          <Ui_Tabs.Tab lifted>Tab 1</Ui_Tabs.Tab>
          <Ui_Tabs.Tab active lifted>
            Tab 2
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab lifted>Tab 3</Ui_Tabs.Tab>
        </Ui_Tabs>
      </>
    ),
    codeExample: `
<Ui_Tabs>
  <Ui_Tabs.Tab lifted>Tab 1</Ui_Tabs.Tab>
  <Ui_Tabs.Tab active lifted>
    Tab 2
  </Ui_Tabs.Tab>
  <Ui_Tabs.Tab lifted>Tab 3</Ui_Tabs.Tab>
</Ui_Tabs>`,
  },
  {
    id: 'steps_4',
    title: 'Tabs boxed',
    preview: (
      <>
        <Ui_Tabs boxed>
          <Ui_Tabs.Tab>Tab 1</Ui_Tabs.Tab>
          <Ui_Tabs.Tab active>Tab 2</Ui_Tabs.Tab>
          <Ui_Tabs.Tab>Tab 3</Ui_Tabs.Tab>
        </Ui_Tabs>
      </>
    ),
    codeExample: `
<Ui_Tabs boxed>
  <Ui_Tabs.Tab>Tab 1</Ui_Tabs.Tab>
  <Ui_Tabs.Tab active>Tab 2</Ui_Tabs.Tab>
  <Ui_Tabs.Tab>Tab 3</Ui_Tabs.Tab>
</Ui_Tabs>`,
  },
  {
    id: 'steps_5',
    title: 'Tabs sizes',
    preview: (
      <div className="flex flex-col items-center gap-6">
        <Ui_Tabs>
          <Ui_Tabs.Tab large lifted>
            Tab 1
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab active large lifted>
            Tab 2
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab large lifted>
            Tab 3
          </Ui_Tabs.Tab>
        </Ui_Tabs>
        <Ui_Tabs>
          <Ui_Tabs.Tab medium lifted>
            Tab 1
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab active medium lifted>
            Tab 2
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab medium lifted>
            Tab 3
          </Ui_Tabs.Tab>
        </Ui_Tabs>
        <Ui_Tabs>
          <Ui_Tabs.Tab small lifted>
            Tab 1
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab active small lifted>
            Tab 2
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab small lifted>
            Tab 3
          </Ui_Tabs.Tab>
        </Ui_Tabs>
        <Ui_Tabs>
          <Ui_Tabs.Tab tiny lifted>
            Tab 1
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab active tiny lifted>
            Tab 2
          </Ui_Tabs.Tab>
          <Ui_Tabs.Tab tiny lifted>
            Tab 3
          </Ui_Tabs.Tab>
        </Ui_Tabs>
      </div>
    ),
    codeExample: `
<div className="flex flex-col items-center gap-6">
  <Ui_Tabs>
    <Ui_Tabs.Tab large lifted>
      Tab 1
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab active large lifted>
      Tab 2
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab large lifted>
      Tab 3
    </Ui_Tabs.Tab>
  </Ui_Tabs>
  <Ui_Tabs>
    <Ui_Tabs.Tab medium lifted>
      Tab 1
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab active medium lifted>
      Tab 2
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab medium lifted>
      Tab 3
    </Ui_Tabs.Tab>
  </Ui_Tabs>
  <Ui_Tabs>
    <Ui_Tabs.Tab small lifted>
      Tab 1
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab active small lifted>
      Tab 2
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab small lifted>
      Tab 3
    </Ui_Tabs.Tab>
  </Ui_Tabs>
  <Ui_Tabs>
    <Ui_Tabs.Tab tiny lifted>
      Tab 1
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab active tiny lifted>
      Tab 2
    </Ui_Tabs.Tab>
    <Ui_Tabs.Tab tiny lifted>
      Tab 3
    </Ui_Tabs.Tab>
  </Ui_Tabs>
</div>`,
  },
]
