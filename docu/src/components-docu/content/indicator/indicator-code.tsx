import { Ui_Indicator, Ui_Input, Ui_Card, Ui_Button, Ui_Avatar } from '@vermorxt/pandora_ui'

export const indicatorCodeExamples = [
  {
    id: 'indicator',
    title: 'Indicator simple',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_start',
    title: 'Indicator start position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge start />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge start />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_center',
    title: 'Indicator center top position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge center />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge center />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_end_middle',
    title: 'Indicator end middle position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge end middle />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge end middle />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_end_bottom',
    title: 'Indicator end bottom position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge end bottom />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge end bottom />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_bottom_center',
    title: 'Indicator center bottom position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge center bottom />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge center bottom />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_bottom_start',
    title: 'Indicator start bottom position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge start bottom />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge start bottom />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_middle_start',
    title: 'Indicator start middle position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge start middle />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge start middle />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_middle_center',
    title: 'Indicator center middle position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge center middle />
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge center middle />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_middle_center',
    title: 'Indicator center middle position',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge>
          default
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge start top>
          start+top
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge start middle>
          start+middle
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge start bottom>
          start+bottom
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge center bottom>
          center+bottom
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge end bottom>
          end+bottom
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge end middle>
          end+middle
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge top center>
          top+center
        </Ui_Indicator.Item>
        <Ui_Indicator.Item color="secondary" badge center middle>
          center+middle
        </Ui_Indicator.Item>
        <div className="grid w-60 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge>default</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge start top>start+top</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge start middle>start+middle</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge start bottom>start+bottom</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge center bottom>center+bottom</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge end bottom>end+bottom</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge end middle>end+middle</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge top center>top+center</Ui_Indicator.Item>
  <Ui_Indicator.Item color="secondary" badge center middle>center+middle</Ui_Indicator.Item>
  <div className="grid w-60 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_content',
    title: 'Indicator with content',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="primary" badge>
          New
        </Ui_Indicator.Item>
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="primary" badge>
    New
  </Ui_Indicator.Item>
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_button',
    title: 'Indicator for button',
    preview: (
      <Ui_Indicator>
        <Ui_Indicator.Item color="secondary" badge>
          99+
        </Ui_Indicator.Item>
        <Ui_Button>Inbox</Ui_Button>
      </Ui_Indicator>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge>
    99+
  </Ui_Indicator.Item>
  <Ui_Button>Inbox</Ui_Button>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_css',
    title: 'Indicator css only for e.g.: tabs',
    preview: (
      <>
        <div className="tabs">
          <a className="tab tab-lifted">Messages</a>
          <a className="indicator tab tab-lifted tab-active">
            Notifications
            <span className="indicator-item badge">8</span>
          </a>
          <a className="tab tab-lifted">Requests</a>
        </div>
      </>
    ),
    codeExample: `
<div className="tabs">
  <a className="tab tab-lifted">Messages</a>
  <a className="indicator tab tab-lifted tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </a>
  <a className="tab tab-lifted">Requests</a>
</div>`,
  },
  {
    id: 'indicator_avatar',
    title: 'Indicator for avatar',
    preview: (
      <>
        <Ui_Indicator>
          <Ui_Avatar src="https://api.lorem.space/image/face?w=160&h=160"></Ui_Avatar>
          <Ui_Indicator.Item color="secondary" badge>
            +99
          </Ui_Indicator.Item>
        </Ui_Indicator>
      </>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Avatar src="https://api.lorem.space/image/face?w=160&h=160"></Ui_Avatar>
  <Ui_Indicator.Item color="secondary" badge>
    +99
  </Ui_Indicator.Item>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_input',
    title: 'Indicator for input',
    preview: (
      <>
        <Ui_Indicator>
          <Ui_Input bordered placeholder="Your email address" />
          <Ui_Indicator.Item badge>required</Ui_Indicator.Item>
        </Ui_Indicator>
      </>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Input bordered placeholder="Your email address" />
  <Ui_Indicator.Item badge>required</Ui_Indicator.Item>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_card',
    title: 'Indicator for card',
    preview: (
      <>
        <Ui_Indicator className="mb-4">
          <Ui_Card>
            <Ui_Card.Body>
              <Ui_Card.Title>Job Title</Ui_Card.Title>
              <p>Rerum reiciendis beatae tenetur excepturi</p>
            </Ui_Card.Body>
          </Ui_Card>
          <Ui_Indicator.Item bottom>
            <Ui_Button primary small>
              Apply
            </Ui_Button>
          </Ui_Indicator.Item>
        </Ui_Indicator>
      </>
    ),
    codeExample: `
<Ui_Indicator className="mb-4">
  <Ui_Card>
    <Ui_Card.Body>
      <Ui_Card.Title>Job Title</Ui_Card.Title>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </Ui_Card.Body>
  </Ui_Card>
  <Ui_Indicator.Item bottom>
    <Ui_Button primary small>
      Apply
    </Ui_Button>
  </Ui_Indicator.Item>
</Ui_Indicator>`,
  },
  {
    id: 'indicator_image',
    title: 'Indicator center of an image',
    preview: (
      <>
        <Ui_Indicator>
          <Ui_Indicator.Item color="secondary" badge center middle>
            Uploading image ...
          </Ui_Indicator.Item>
          <img src="https://api.lorem.space/image/house?w=300&h=150" />
        </Ui_Indicator>
      </>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item color="secondary" badge center middle>
    Uploading image ...
  </Ui_Indicator.Item>
  <img src="https://api.lorem.space/image/house?w=300&h=150" />
</Ui_Indicator>`,
  },
  {
    id: 'indicator_responsive',
    title: 'Indicator responsive',
    preview: (
      <>
        <Ui_Indicator>
          <Ui_Indicator.Item
            color="secondary"
            badge
            className="indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"
          />
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Ui_Indicator>
      </>
    ),
    codeExample: `
<Ui_Indicator>
  <Ui_Indicator.Item
    color="secondary"
    badge
    className="indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"
  />
  <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
</Ui_Indicator>`,
  },
]
