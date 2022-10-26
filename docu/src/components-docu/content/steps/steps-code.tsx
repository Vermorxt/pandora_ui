import { Ui_Steps } from '@vermorxt/pandora_ui'

export const stepsCodeExamples = [
  {
    id: 'steps_1',
    title: 'Horizontal',
    preview: (
      <>
        <Ui_Steps>
          <Ui_Steps.Step primary>Register</Ui_Steps.Step>
          <Ui_Steps.Step primary>Choose plan</Ui_Steps.Step>
          <Ui_Steps.Step>Purchase</Ui_Steps.Step>
          <Ui_Steps.Step>Receive Product</Ui_Steps.Step>
        </Ui_Steps>
      </>
    ),
    codeExample: `
<Ui_Steps>
  <Ui_Steps.Step primary>Register</Ui_Steps.Step>
  <Ui_Steps.Step primary>Choose plan</Ui_Steps.Step>
  <Ui_Steps.Step>Purchase</Ui_Steps.Step>
  <Ui_Steps.Step>Receive Product</Ui_Steps.Step>
</Ui_Steps>`,
  },
  {
    id: 'steps_2',
    title: 'Vertical',
    preview: (
      <>
        <Ui_Steps vertical>
          <Ui_Steps.Step primary>Register</Ui_Steps.Step>
          <Ui_Steps.Step primary>Choose plan</Ui_Steps.Step>
          <Ui_Steps.Step>Purchase</Ui_Steps.Step>
          <Ui_Steps.Step>Receive Product</Ui_Steps.Step>
        </Ui_Steps>
      </>
    ),
    codeExample: `
<Ui_Steps>
  <Ui_Steps.Step primary>Register</Ui_Steps.Step>
  <Ui_Steps.Step primary>Choose plan</Ui_Steps.Step>
  <Ui_Steps.Step>Purchase</Ui_Steps.Step>
  <Ui_Steps.Step>Receive Product</Ui_Steps.Step>
</Ui_Steps>`,
  },
  {
    id: 'steps_3',
    title: 'Responsive (vertical on small screen, horizontal on large screen)',
    preview: (
      <>
        <Ui_Steps vertical className="lg:steps-horizontal">
          <Ui_Steps.Step primary>Register</Ui_Steps.Step>
          <Ui_Steps.Step primary>Choose plan</Ui_Steps.Step>
          <Ui_Steps.Step>Purchase</Ui_Steps.Step>
          <Ui_Steps.Step>Receive Product</Ui_Steps.Step>
        </Ui_Steps>
      </>
    ),
    codeExample: `
<Ui_Steps>
  <Ui_Steps.Step primary>Register</Ui_Steps.Step>
  <Ui_Steps.Step primary>Choose plan</Ui_Steps.Step>
  <Ui_Steps.Step>Purchase</Ui_Steps.Step>
  <Ui_Steps.Step>Receive Product</Ui_Steps.Step>
</Ui_Steps>`,
  },
  {
    id: 'steps_4',
    title: 'With data-content',
    preview: (
      <>
        <Ui_Steps vertical className="lg:steps-horizontal">
          <Ui_Steps.Step neutral dataContent="?">
            Step 1
          </Ui_Steps.Step>
          <Ui_Steps.Step neutral dataContent="!">
            Step 2
          </Ui_Steps.Step>
          <Ui_Steps.Step neutral dataContent="✓">
            Step 3
          </Ui_Steps.Step>
          <Ui_Steps.Step neutral dataContent="✕">
            Step 4
          </Ui_Steps.Step>
          <Ui_Steps.Step neutral dataContent="★">
            Step 5
          </Ui_Steps.Step>
          <Ui_Steps.Step neutral dataContent="">
            Step 6
          </Ui_Steps.Step>
          <Ui_Steps.Step neutral dataContent="●">
            Step 6
          </Ui_Steps.Step>
        </Ui_Steps>
      </>
    ),
    codeExample: `
<Ui_Steps vertical className="lg:steps-horizontal">
  <Ui_Steps.Step neutral dataContent="?">
    Step 1
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="!">
    Step 2
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="✓">
    Step 3
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="✕">
    Step 4
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="★">
    Step 5
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="">
    Step 6
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="●">
    Step 6
  </Ui_Steps.Step>
</Ui_Steps>`,
  },
  {
    id: 'steps_4',
    title: 'With data-content',
    preview: (
      <>
        <Ui_Steps vertical className="lg:steps-horizontal">
          <Ui_Steps.Step info>Fly to moon</Ui_Steps.Step>
          <Ui_Steps.Step info>Shrink the moon</Ui_Steps.Step>
          <Ui_Steps.Step info>Grab the moon</Ui_Steps.Step>
          <Ui_Steps.Step error dataContent="?">
            Sit on toilet
          </Ui_Steps.Step>
        </Ui_Steps>
      </>
    ),
    codeExample: `
<Ui_Steps vertical className="lg:steps-horizontal">
  <Ui_Steps.Step neutral dataContent="?">
    Step 1
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="!">
    Step 2
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="✓">
    Step 3
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="✕">
    Step 4
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="★">
    Step 5
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="">
    Step 6
  </Ui_Steps.Step>
  <Ui_Steps.Step neutral dataContent="●">
    Step 6
  </Ui_Steps.Step>
</Ui_Steps>`,
  },
  {
    id: 'steps_4',
    title: 'With scrollable wrapper',
    preview: (
      <>
        <Ui_Steps vertical className="lg:steps-horizontal">
          <Ui_Steps.Step>start</Ui_Steps.Step>
          <Ui_Steps.Step secondary>2</Ui_Steps.Step>
          <Ui_Steps.Step secondary>3</Ui_Steps.Step>
          <Ui_Steps.Step secondary>4</Ui_Steps.Step>
          <Ui_Steps.Step>5</Ui_Steps.Step>
          <Ui_Steps.Step accent>6</Ui_Steps.Step>
          <Ui_Steps.Step accent>7</Ui_Steps.Step>
          <Ui_Steps.Step>8</Ui_Steps.Step>
          <Ui_Steps.Step error>9</Ui_Steps.Step>
          <Ui_Steps.Step error>10</Ui_Steps.Step>
          <Ui_Steps.Step>11</Ui_Steps.Step>
          <Ui_Steps.Step>12</Ui_Steps.Step>
          <Ui_Steps.Step warning>13</Ui_Steps.Step>
          <Ui_Steps.Step warning>14</Ui_Steps.Step>
          <Ui_Steps.Step>15</Ui_Steps.Step>
          <Ui_Steps.Step neutral>16</Ui_Steps.Step>
          <Ui_Steps.Step neutral>17</Ui_Steps.Step>
          <Ui_Steps.Step neutral>18</Ui_Steps.Step>
          <Ui_Steps.Step neutral>19</Ui_Steps.Step>
          <Ui_Steps.Step neutral>20</Ui_Steps.Step>
          <Ui_Steps.Step neutral>21</Ui_Steps.Step>
          <Ui_Steps.Step neutral>22</Ui_Steps.Step>
          <Ui_Steps.Step neutral>23</Ui_Steps.Step>
          <Ui_Steps.Step neutral>end</Ui_Steps.Step>
        </Ui_Steps>
      </>
    ),
    codeExample: `
<Ui_Steps vertical className="lg:steps-horizontal">
  <Ui_Steps.Step>start</Ui_Steps.Step>
  <Ui_Steps.Step secondary>2</Ui_Steps.Step>
  <Ui_Steps.Step secondary>3</Ui_Steps.Step>
  <Ui_Steps.Step secondary>4</Ui_Steps.Step>
  <Ui_Steps.Step>5</Ui_Steps.Step>
  <Ui_Steps.Step accent>6</Ui_Steps.Step>
  <Ui_Steps.Step accent>7</Ui_Steps.Step>
  <Ui_Steps.Step>8</Ui_Steps.Step>
  <Ui_Steps.Step error>9</Ui_Steps.Step>
  <Ui_Steps.Step error>10</Ui_Steps.Step>
  <Ui_Steps.Step>11</Ui_Steps.Step>
  <Ui_Steps.Step>12</Ui_Steps.Step>
  <Ui_Steps.Step warning>13</Ui_Steps.Step>
  <Ui_Steps.Step warning>14</Ui_Steps.Step>
  <Ui_Steps.Step>15</Ui_Steps.Step>
  <Ui_Steps.Step neutral>16</Ui_Steps.Step>
  <Ui_Steps.Step neutral>17</Ui_Steps.Step>
  <Ui_Steps.Step neutral>18</Ui_Steps.Step>
  <Ui_Steps.Step neutral>19</Ui_Steps.Step>
  <Ui_Steps.Step neutral>20</Ui_Steps.Step>
  <Ui_Steps.Step neutral>21</Ui_Steps.Step>
  <Ui_Steps.Step neutral>22</Ui_Steps.Step>
  <Ui_Steps.Step neutral>23</Ui_Steps.Step>
  <Ui_Steps.Step neutral>end</Ui_Steps.Step>
</Ui_Steps>`,
  },
]
