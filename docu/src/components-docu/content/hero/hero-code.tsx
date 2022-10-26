import React from 'react'
import { Ui_Button, Ui_Card, Ui_Hero, Ui_Input } from '@vermorxt/pandora_ui'

export const heroCodeExamples = [
  {
    id: 'hero-1',
    title: 'Hero simple',
    preview: (
      <>
        <Ui_Hero>
          <Ui_Hero.Content className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <Ui_Button primary>Get Started</Ui_Button>
            </div>
          </Ui_Hero.Content>
        </Ui_Hero>
      </>
    ),
    codeExample: `
<Ui_Hero>
  <Ui_Hero.Content className="text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
        deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Ui_Button primary>Get Started</Ui_Button>
    </div>
  </Ui_Hero.Content>
</Ui_Hero>
`,
  },
  {
    id: 'hero-2',
    title: 'Hero min height screen',
    preview: (
      <>
        <Ui_Hero minHeightScreen>
          <Ui_Hero.Content className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <Ui_Button primary>Get Started</Ui_Button>
            </div>
          </Ui_Hero.Content>
        </Ui_Hero>
      </>
    ),
    codeExample: `
<Ui_Hero minHeightScreen>
  <Ui_Hero.Content className="text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
        deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Ui_Button primary>Get Started</Ui_Button>
    </div>
  </Ui_Hero.Content>
</Ui_Hero>
`,
  },
  {
    id: 'hero-3',
    title: 'Hero min height screen',
    preview: (
      <>
        <Ui_Hero>
          <Ui_Hero.Content flexCol>
            <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <Ui_Button primary>Get Started</Ui_Button>
            </div>
          </Ui_Hero.Content>
        </Ui_Hero>
      </>
    ),
    codeExample: `
<Ui_Hero>
  <Ui_Hero.Content flexCol>
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
        deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Ui_Button primary>Get Started</Ui_Button>
    </div>
  </Ui_Hero.Content>
</Ui_Hero>
`,
  },
  {
    id: 'hero-4',
    title: 'Hero min height screen',
    preview: (
      <>
        <Ui_Hero>
          <Ui_Hero.Content flexColReverse>
            <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <Ui_Button primary>Get Started</Ui_Button>
            </div>
          </Ui_Hero.Content>
        </Ui_Hero>
      </>
    ),
    codeExample: `
<Ui_Hero>
  <Ui_Hero.Content flexColReverse>
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
        deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Ui_Button primary>Get Started</Ui_Button>
    </div>
  </Ui_Hero.Content>
</Ui_Hero>
`,
  },
  {
    id: 'hero-5',
    title: 'Hero min height screen',
    preview: (
      <>
        <Ui_Hero>
          <Ui_Hero.Content flexColReverse>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <Ui_Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <Ui_Card.Body>
                <div className="form-control">
                  <Ui_Input label="Email" placeholder="email" bordered />
                </div>
                <div className="form-control">
                  <Ui_Input label="Password" placeholder="Password" bordered />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <Ui_Button primary>Login</Ui_Button>
                </div>
              </Ui_Card.Body>
            </Ui_Card>
          </Ui_Hero.Content>
        </Ui_Hero>
      </>
    ),
    codeExample: `
<Ui_Hero>
  <Ui_Hero.Content flexColReverse>
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
        deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <Ui_Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Ui_Card.Body>
        <div className="form-control">
          <Ui_Input label="Email" placeholder="email" bordered />
        </div>
        <div className="form-control">
          <Ui_Input label="Password" placeholder="Password" bordered />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <Ui_Button primary>Login</Ui_Button>
        </div>
      </Ui_Card.Body>
    </Ui_Card>
  </Ui_Hero.Content>
</Ui_Hero>
`,
  },
  {
    id: 'hero-6',
    title: 'Hero min height screen',
    preview: (
      <>
        <Ui_Hero minHeightScreen style={{ backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)' }}>
          <Ui_Hero.Overlay className="bg-opacity-60" />
          <Ui_Hero.Content textCenter>
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </Ui_Hero.Content>
        </Ui_Hero>
      </>
    ),
    codeExample: `
<Ui_Hero minHeightScreen style={{ backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)' }}>
  <Ui_Hero.Overlay className="bg-opacity-60" />
  <Ui_Hero.Content textCenter>
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
        deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </Ui_Hero.Content>
</Ui_Hero>
`,
  },
]
