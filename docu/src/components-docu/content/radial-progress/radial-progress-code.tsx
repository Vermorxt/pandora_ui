import { Ui_RadialProgress } from '@vermorxt/pandora_ui'

export const radialProgressCodeExamples = [
  {
    id: 'progress_1',
    title: 'Progress default',
    preview: (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <Ui_RadialProgress value={20}>20%</Ui_RadialProgress>
        <Ui_RadialProgress value={60}>60%</Ui_RadialProgress>
        <Ui_RadialProgress value={100}>100%</Ui_RadialProgress>
      </div>
    ),
    codeExample: `
<Ui_RadialProgress value={20}>20%</Ui_RadialProgress>
<Ui_RadialProgress value={60}>60%</Ui_RadialProgress>
<Ui_RadialProgress value={100}>100%</Ui_RadialProgress>`,
  },
  {
    id: 'progress_2',
    title: 'Progress primary color',
    preview: (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <Ui_RadialProgress value={10} textPrimary>
          10%
        </Ui_RadialProgress>
        <Ui_RadialProgress value={40} textSecondary>
          40%
        </Ui_RadialProgress>
        <Ui_RadialProgress value={60} primary>
          60%
        </Ui_RadialProgress>
        <Ui_RadialProgress value={80} secondary>
          80%
        </Ui_RadialProgress>
        <Ui_RadialProgress value={100} secondary>
          100%
        </Ui_RadialProgress>
      </div>
    ),
    codeExample: `
<Ui_RadialProgress value={10} textPrimary>
  10%
</Ui_RadialProgress>
<Ui_RadialProgress value={40} textSecondary>
  40%
</Ui_RadialProgress>
<Ui_RadialProgress value={60} primary>
  60%
</Ui_RadialProgress>
<Ui_RadialProgress value={80} secondary>
  80%
</Ui_RadialProgress>
<Ui_RadialProgress value={100} secondary>
  100%
</Ui_RadialProgress>`,
  },
  {
    id: 'progress_3',
    title: 'Progress primary color',
    preview: (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <Ui_RadialProgress value={60} primary size="12rem" thickness="10px">
          60%
        </Ui_RadialProgress>
        <Ui_RadialProgress value={80} secondary size="6rem" thickness="2px">
          80%
        </Ui_RadialProgress>
        <Ui_RadialProgress value={90} size="8rem" thickness="5px">
          90%
        </Ui_RadialProgress>
      </div>
    ),
    codeExample: `
<Ui_RadialProgress value={60} primary size="12rem" thickness="10px">
  60%
</Ui_RadialProgress>
<Ui_RadialProgress value={80} secondary size="6rem" thickness="2px">
  80%
</Ui_RadialProgress>
<Ui_RadialProgress value={90} size="8rem" thickness="5px">
  100%
</Ui_RadialProgress>`,
  },
]
