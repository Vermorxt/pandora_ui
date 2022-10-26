import { DEFAULT_SVG_ICON_STYLES } from '@/root/src/_constants/main'
import {
  HiAdjustments,
  HiOutlineArchive,
  HiOutlineHeart,
  HiOutlineInformationCircle,
  HiOutlineLightningBolt,
} from 'react-icons/hi'
import { Ui_Stat, Ui_Avatar, Ui_Button } from '@vermorxt/pandora_ui'

export const statCodeExamples = [
  {
    id: 'Stat_1',
    title: 'Stat Simple',
    preview: (
      <Ui_Stat>
        <Ui_Stat.Item>
          <Ui_Stat.Title>Total Page Views</Ui_Stat.Title>
          <Ui_Stat.Value>89,400</Ui_Stat.Value>
          <Ui_Stat.Description>21% more than last month</Ui_Stat.Description>
        </Ui_Stat.Item>
      </Ui_Stat>
    ),
    codeExample: `
<Ui_Stat>
  <Ui_Stat.Item>
    <Ui_Stat.Title>Total Page Views</Ui_Stat.Title>
    <Ui_Stat.Value>89,400</Ui_Stat.Value>
    <Ui_Stat.Description>21% more than last month</Ui_Stat.Description>
  </Ui_Stat.Item>
</Ui_Stat>`,
  },
  {
    id: 'Stat_2',
    title: 'Stat with icons or image',
    preview: (
      <Ui_Stat>
        <Ui_Stat.Item>
          <Ui_Stat.Figure textColor="primary">
            <HiOutlineHeart style={DEFAULT_SVG_ICON_STYLES} />
          </Ui_Stat.Figure>
          <Ui_Stat.Title>Total Likes</Ui_Stat.Title>
          <Ui_Stat.Value textColor="primary">25.6K</Ui_Stat.Value>
          <Ui_Stat.Description>21% more than last month</Ui_Stat.Description>
        </Ui_Stat.Item>

        <Ui_Stat.Item>
          <Ui_Stat.Figure textColor="secondary">
            <HiOutlineLightningBolt style={DEFAULT_SVG_ICON_STYLES} />
          </Ui_Stat.Figure>
          <Ui_Stat.Title>Page views</Ui_Stat.Title>
          <Ui_Stat.Value textColor="secondary">2.6M</Ui_Stat.Value>
          <Ui_Stat.Description>21% more than last month</Ui_Stat.Description>
        </Ui_Stat.Item>
        <Ui_Stat.Item>
          <Ui_Stat.Figure>
            <Ui_Avatar src="https://api.lorem.space/image/face?w=128&h=128" small roundedFull online />
          </Ui_Stat.Figure>
          <Ui_Stat.Value>86%</Ui_Stat.Value>
          <Ui_Stat.Title>Tasks done</Ui_Stat.Title>
          <Ui_Stat.Description textColor="secondary">31 tasks remaining</Ui_Stat.Description>
        </Ui_Stat.Item>
      </Ui_Stat>
    ),
    codeExample: `
<Ui_Stat>
  <Ui_Stat.Item>
    <Ui_Stat.Figure textColor="primary">
      <HiOutlineHeart style={DEFAULT_SVG_ICON_STYLES} />
    </Ui_Stat.Figure>
    <Ui_Stat.Title>Total Likes</Ui_Stat.Title>
    <Ui_Stat.Value textColor="primary">25.6K</Ui_Stat.Value>
    <Ui_Stat.Description>21% more than last month</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Figure textColor="secondary">
      <HiOutlineLightningBolt style={DEFAULT_SVG_ICON_STYLES} />
    </Ui_Stat.Figure>
    <Ui_Stat.Title>Page views</Ui_Stat.Title>
    <Ui_Stat.Value textColor="secondary">2.6M</Ui_Stat.Value>
    <Ui_Stat.Description>21% more than last month</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Figure>
      <Ui_Avatar src="https://api.lorem.space/image/face?w=128&h=128" small roundedFull online />
    </Ui_Stat.Figure>
    <Ui_Stat.Value>86%</Ui_Stat.Value>
    <Ui_Stat.Title>Tasks done</Ui_Stat.Title>
    <Ui_Stat.Description textColor="secondary">31 tasks remaining</Ui_Stat.Description>
  </Ui_Stat.Item>
</Ui_Stat>`,
  },
  {
    id: 'Stat_3',
    title: 'Stat',
    preview: (
      <Ui_Stat>
        <Ui_Stat.Item>
          <Ui_Stat.Figure textColor="secondary">
            <HiOutlineInformationCircle style={DEFAULT_SVG_ICON_STYLES} />
          </Ui_Stat.Figure>
          <Ui_Stat.Title>Downloads</Ui_Stat.Title>
          <Ui_Stat.Value>31K</Ui_Stat.Value>
          <Ui_Stat.Description>Jan 1st - Feb 1st</Ui_Stat.Description>
        </Ui_Stat.Item>

        <Ui_Stat.Item>
          <Ui_Stat.Figure textColor="secondary">
            <HiAdjustments style={DEFAULT_SVG_ICON_STYLES} />
          </Ui_Stat.Figure>
          <Ui_Stat.Title>New Users</Ui_Stat.Title>
          <Ui_Stat.Value>4,200</Ui_Stat.Value>
          <Ui_Stat.Description>↗︎ 400 (22%)</Ui_Stat.Description>
        </Ui_Stat.Item>
        <Ui_Stat.Item>
          <Ui_Stat.Figure textColor="secondary">
            <HiOutlineArchive style={DEFAULT_SVG_ICON_STYLES} />
          </Ui_Stat.Figure>{' '}
          <Ui_Stat.Title>New Registers</Ui_Stat.Title>
          <Ui_Stat.Value>1,200</Ui_Stat.Value>
          <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
        </Ui_Stat.Item>
      </Ui_Stat>
    ),
    codeExample: `
<Ui_Stat>
  <Ui_Stat.Item>
    <Ui_Stat.Figure textColor="secondary">
      <HiOutlineInformationCircle style={DEFAULT_SVG_ICON_STYLES} />
    </Ui_Stat.Figure>
    <Ui_Stat.Title>Downloads</Ui_Stat.Title>
    <Ui_Stat.Value>31K</Ui_Stat.Value>
    <Ui_Stat.Description>Jan 1st - Feb 1st</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Figure textColor="secondary">
      <HiAdjustments style={DEFAULT_SVG_ICON_STYLES} />
    </Ui_Stat.Figure>
    <Ui_Stat.Title>New Users</Ui_Stat.Title>
    <Ui_Stat.Value>4,200</Ui_Stat.Value>
    <Ui_Stat.Description>↗︎ 400 (22%)</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Figure textColor="secondary">
      <HiOutlineArchive style={DEFAULT_SVG_ICON_STYLES} />
    </Ui_Stat.Figure>{' '}
    <Ui_Stat.Title>New Registers</Ui_Stat.Title>
    <Ui_Stat.Value>1,200</Ui_Stat.Value>
    <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
  </Ui_Stat.Item>
</Ui_Stat>`,
  },
  {
    id: 'Stat_4',
    title: 'Centered items',
    preview: (
      <Ui_Stat>
        <Ui_Stat.Item center>
          <Ui_Stat.Title>Downloads</Ui_Stat.Title>
          <Ui_Stat.Value>31K</Ui_Stat.Value>
          <Ui_Stat.Description>From January 1st to February 1st</Ui_Stat.Description>
        </Ui_Stat.Item>

        <Ui_Stat.Item center>
          <Ui_Stat.Title>Users</Ui_Stat.Title>
          <Ui_Stat.Value textColor="secondary">4,200</Ui_Stat.Value>
          <Ui_Stat.Description textColor="secondary">↗︎ 40 (2%)</Ui_Stat.Description>
        </Ui_Stat.Item>
        <Ui_Stat.Item center>
          <Ui_Stat.Title>New Registers</Ui_Stat.Title>
          <Ui_Stat.Value>1,200</Ui_Stat.Value>
          <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
        </Ui_Stat.Item>
      </Ui_Stat>
    ),
    codeExample: `
<Ui_Stat>
  <Ui_Stat.Item center>
    <Ui_Stat.Title>Downloads</Ui_Stat.Title>
    <Ui_Stat.Value>31K</Ui_Stat.Value>
    <Ui_Stat.Description>From January 1st to February 1st</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item center>
    <Ui_Stat.Title>Users</Ui_Stat.Title>
    <Ui_Stat.Value textColor="secondary">4,200</Ui_Stat.Value>
    <Ui_Stat.Description textColor="secondary">↗︎ 40 (2%)</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item center>
    <Ui_Stat.Title>New Registers</Ui_Stat.Title>
    <Ui_Stat.Value>1,200</Ui_Stat.Value>
    <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
  </Ui_Stat.Item>
</Ui_Stat>`,
  },
  {
    id: 'Stat_5',
    title: 'Vertical',
    preview: (
      <Ui_Stat vertical>
        <Ui_Stat.Item>
          <Ui_Stat.Title>Downloads</Ui_Stat.Title>
          <Ui_Stat.Value>31K</Ui_Stat.Value>
          <Ui_Stat.Description>Jan 1st - Feb 1st</Ui_Stat.Description>
        </Ui_Stat.Item>

        <Ui_Stat.Item>
          <Ui_Stat.Title>New Users</Ui_Stat.Title>
          <Ui_Stat.Value>4,200</Ui_Stat.Value>
          <Ui_Stat.Description>↗︎ 400 (22%)</Ui_Stat.Description>
        </Ui_Stat.Item>
        <Ui_Stat.Item>
          <Ui_Stat.Title>New Registers</Ui_Stat.Title>
          <Ui_Stat.Value>1,200</Ui_Stat.Value>
          <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
        </Ui_Stat.Item>
      </Ui_Stat>
    ),
    codeExample: `
<Ui_Stat vertical>
  <Ui_Stat.Item>
    <Ui_Stat.Title>Downloads</Ui_Stat.Title>
    <Ui_Stat.Value>31K</Ui_Stat.Value>
    <Ui_Stat.Description>Jan 1st - Feb 1st</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Title>New Users</Ui_Stat.Title>
    <Ui_Stat.Value>4,200</Ui_Stat.Value>
    <Ui_Stat.Description>↗︎ 400 (22%)</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Title>New Registers</Ui_Stat.Title>
    <Ui_Stat.Value>1,200</Ui_Stat.Value>
    <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
    </Ui_Stat.Item>
</Ui_Stat>`,
  },
  {
    id: 'Stat_6',
    title: 'Responsive (vertical on small screen, horizontal on large screen)',
    preview: (
      <Ui_Stat vertical onLargeHorizontal>
        <Ui_Stat.Item>
          <Ui_Stat.Title>Downloads</Ui_Stat.Title>
          <Ui_Stat.Value>31K</Ui_Stat.Value>
          <Ui_Stat.Description>Jan 1st - Feb 1st</Ui_Stat.Description>
        </Ui_Stat.Item>

        <Ui_Stat.Item>
          <Ui_Stat.Title>New Users</Ui_Stat.Title>
          <Ui_Stat.Value>4,200</Ui_Stat.Value>
          <Ui_Stat.Description>↗︎ 400 (22%)</Ui_Stat.Description>
        </Ui_Stat.Item>
        <Ui_Stat.Item>
          <Ui_Stat.Title>New Registers</Ui_Stat.Title>
          <Ui_Stat.Value>1,200</Ui_Stat.Value>
          <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
        </Ui_Stat.Item>
      </Ui_Stat>
    ),
    codeExample: `
<Ui_Stat vertical onLargeHorizontal>
  <Ui_Stat.Item>
    <Ui_Stat.Title>Downloads</Ui_Stat.Title>
    <Ui_Stat.Value>31K</Ui_Stat.Value>
    <Ui_Stat.Description>Jan 1st - Feb 1st</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Title>New Users</Ui_Stat.Title>
    <Ui_Stat.Value>4,200</Ui_Stat.Value>
    <Ui_Stat.Description>↗︎ 400 (22%)</Ui_Stat.Description>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Title>New Registers</Ui_Stat.Title>
    <Ui_Stat.Value>1,200</Ui_Stat.Value>
    <Ui_Stat.Description>↘︎ 90 (14%)</Ui_Stat.Description>
  </Ui_Stat.Item>
</Ui_Stat>`,
  },
  {
    id: 'Stat_7',
    title: 'With custom colors and button',
    preview: (
      <Ui_Stat bgColor="primary">
        <Ui_Stat.Item>
          <Ui_Stat.Title>Account balance</Ui_Stat.Title>
          <Ui_Stat.Value>$89,400</Ui_Stat.Value>
          <Ui_Stat.Actions>
            <Ui_Button small success>
              Add funds
            </Ui_Button>
          </Ui_Stat.Actions>
        </Ui_Stat.Item>
        <Ui_Stat.Item>
          <Ui_Stat.Title>Current balance</Ui_Stat.Title>
          <Ui_Stat.Value>$89,400</Ui_Stat.Value>
          <Ui_Stat.Actions>
            <Ui_Button small>Withdrawal</Ui_Button>
            <Ui_Button small>Deposit</Ui_Button>
          </Ui_Stat.Actions>
        </Ui_Stat.Item>
      </Ui_Stat>
    ),
    codeExample: `
<Ui_Stat bgColor="primary">
  <Ui_Stat.Item>
    <Ui_Stat.Title>Account balance</Ui_Stat.Title>
    <Ui_Stat.Value>$89,400</Ui_Stat.Value>
    <Ui_Stat.Actions>
      <Ui_Button small success>
        Add funds
      </Ui_Button>
    </Ui_Stat.Actions>
  </Ui_Stat.Item>
  <Ui_Stat.Item>
    <Ui_Stat.Title>Current balance</Ui_Stat.Title>
    <Ui_Stat.Value>$89,400</Ui_Stat.Value>
    <Ui_Stat.Actions>
      <Ui_Button small>Withdrawal</Ui_Button>
      <Ui_Button small>Deposit</Ui_Button>
    </Ui_Stat.Actions>
  </Ui_Stat.Item>
</Ui_Stat>`,
  },
]
