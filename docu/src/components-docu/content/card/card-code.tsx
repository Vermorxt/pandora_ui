import { XIcon } from '@heroicons/react/solid'
import { Ui_Badge, Ui_Button, Ui_Card } from '@vermorxt/pandora_ui'

export const cardCodeExamples = [
  {
    id: 'card_1',
    title: 'Card simple',
    preview: (
      <Ui_Card w96>
        <figure>
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
        </figure>
        <Ui_Card.Body>
          <Ui_Card.Title>Shoes!</Ui_Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Ui_Card.Actions>
            <Ui_Button>Buy Now</Ui_Button>
          </Ui_Card.Actions>
        </Ui_Card.Body>
      </Ui_Card>
    ),
    codeExample: `
<Ui_Card w96>
  <figure>
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>Shoes!</Ui_Card.Title>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Ui_Card.Actions>
      <Ui_Button>Buy Now</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_2',
    title: 'Card compact (less padding for card-body)',
    preview: (
      <>
        <Ui_Card compact w96>
          <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>Shoes!</Ui_Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Ui_Card.Actions>
              <Ui_Button>Buy Now</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card compact w96>
  <figure>
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>Shoes!</Ui_Card.Title>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Ui_Card.Actions>
      <Ui_Button>Buy Now</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_3',
    title: 'Card with badge',
    preview: (
      <>
        <Ui_Card w96>
          <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>
              Shoes! <Ui_Badge secondary>NEW</Ui_Badge>
            </Ui_Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Ui_Card.Actions>
              <Ui_Badge outline>Fashion</Ui_Badge>
              <Ui_Badge outline>Products</Ui_Badge>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card w96>
  <figure>
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>
      Shoes! <Ui_Badge secondary>NEW</Ui_Badge>
    </Ui_Card.Title>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Ui_Card.Actions>
      <Ui_Badge outline>Fashion</Ui_Badge>
      <Ui_Badge outline>Products</Ui_Badge>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_4',
    title: 'Card with bottom image',
    preview: (
      <>
        <Ui_Card w96>
          <Ui_Card.Body>
            <Ui_Card.Title>Shoes!</Ui_Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </Ui_Card.Body>
          <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
          </figure>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card w96>
    <Ui_Card.Body>
      <Ui_Card.Title>Shoes!</Ui_Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    </Ui_Card.Body>
    <figure>
      <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
    </figure>
</Ui_Card>`,
  },
  {
    id: 'card_5',
    title: 'Card with centered content',
    preview: (
      <>
        <Ui_Card w96>
          <figure className="px-10 pt-10">
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
          </figure>
          <Ui_Card.Body itemsCenter textCenter>
            <Ui_Card.Title>Shoes!</Ui_Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Ui_Card.Actions>
              <Ui_Button>Buy Now</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card w96>
  <figure className="px-10 pt-10">
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
  </figure>
  <Ui_Card.Body itemsCenter textCenter>
    <Ui_Card.Title>Shoes!</Ui_Card.Title>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Ui_Card.Actions>
      <Ui_Button>Buy Now</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_6',
    title: 'Card image overlay',
    preview: (
      <>
        <Ui_Card imageAsBackground w96>
          <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
          </figure>
          <Ui_Card.Body w96>
            <Ui_Card.Title>Shoes!</Ui_Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Ui_Card.Actions>
              <Ui_Button>Buy Now</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card imageAsBackground w96>
  <figure>
    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>Shoes!</Ui_Card.Title>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Ui_Card.Actions>
            <Ui_Button>Buy Now</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_7',
    title: 'Card without image',
    preview: (
      <>
        <Ui_Card w96>
          <Ui_Card.Body>
            <Ui_Card.Title>Shoes!</Ui_Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Ui_Card.Actions>
              <Ui_Button>Buy Now</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card w96>
  <Ui_Card.Body>
    <Ui_Card.Title>Shoes!</Ui_Card.Title>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Ui_Card.Actions>
            <Ui_Button>Buy Now</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_8',
    title: 'Card with custom color',
    preview: (
      <>
        <Ui_Card bgPrimary textPrimaryContent w96>
          <Ui_Card.Body>
            <Ui_Card.Title>Shoes!</Ui_Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Ui_Card.Actions>
              <Ui_Button>Buy Now</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card bgPrimary textPrimaryContent w96>
  <Ui_Card.Body>
    <Ui_Card.Title>Shoes!</Ui_Card.Title>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Ui_Card.Actions>
    <Ui_Button>Buy Now</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_9',
    title: 'Centered card with neutral color',
    preview: (
      <>
        <Ui_Card bgNeutral textNeutralContent w96>
          <Ui_Card.Body itemsCenter textCenter>
            <Ui_Card.Title>Cookies!</Ui_Card.Title>
            <p>We are using cookies for no reason.</p>
            <Ui_Card.Actions>
              <Ui_Button primary>Accept</Ui_Button>
              <Ui_Button ghost>Deny</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card bgNeutral textNeutralContent w96>
  <Ui_Card.Body itemsCenter textCenter>
    <Ui_Card.Title>Cookies!</Ui_Card.Title>
      <p>We are using cookies for no reason.</p>
    <Ui_Card.Actions>
      <Ui_Button primary>Accept</Ui_Button>
      <Ui_Button ghost>Deny</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_10',
    title: 'Card with action on top',
    preview: (
      <>
        <Ui_Card w96>
          <Ui_Card.Body>
            <Ui_Card.Actions>
              <Ui_Button square small>
                <XIcon />
              </Ui_Button>
            </Ui_Card.Actions>
            <p>We are using cookies for no reason.</p>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card w96>
  <Ui_Card.Body>
    <Ui_Card.Actions>
      <Ui_Button square small>
        <XIcon />
      </Ui_Button>
    </Ui_Card.Actions>
    <p>We are using cookies for no reason.</p>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_11',
    title: 'Card with action on top',
    preview: (
      <>
        <Ui_Card glass w96>
          <figure>
            <img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>Life hack</Ui_Card.Title>
            <p>How to park your car at your garage?</p>
            <Ui_Card.Actions>
              <Ui_Button primary>Learn now!</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card glass w96>
  <figure>
    <img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>Life hack</Ui_Card.Title>
      <p>How to park your car at your garage?</p>
    <Ui_Card.Actions>
      <Ui_Button primary>Learn now!</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_12',
    title: 'Card with image on side',
    preview: (
      <>
        <Ui_Card cardSide>
          <figure>
            <img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>New movie is released!</Ui_Card.Title>
            <p>Click the button to watch on Fettflix app.</p>
            <Ui_Card.Actions>
              <Ui_Button primary>Watch!</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card cardSide bgBase100>
  <figure>
    <img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>New movie is released!</Ui_Card.Title>
      <p>Click the button to watch on Netflix app.</p>
    <Ui_Card.Actions>
      <Ui_Button primary>Watch!</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_13',
    title: 'Responsive card (vertical on small screen, horizontal on large screen)',
    preview: (
      <>
        <Ui_Card cardSideLarge>
          <figure>
            <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>New album is released!</Ui_Card.Title>
            <p>Click the button to listen on Spotishy app.</p>
            <Ui_Card.Actions>
              <Ui_Button primary>Listen!</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card cardSideLarge bgBase100>
  <figure>
    <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>New album is released!</Ui_Card.Title>
      <p>Click the button to listen on Spotishy app.</p>
    <Ui_Card.Actions>
      <Ui_Button primary>Listen!</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_14',
    title: 'Card with action center buttons',
    preview: (
      <>
        <Ui_Card cardSideLarge>
          <figure>
            <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>New album is released!</Ui_Card.Title>
            <p>Click the button to listen on Spotishy app.</p>
            <Ui_Card.Actions actionCenter>
              <Ui_Button primary>Listen!</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card cardSideLarge bgBase100>
  <figure>
    <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>New album is released!</Ui_Card.Title>
      <p>Click the button to listen on Spotishy app.</p>
    <Ui_Card.Actions actionCenter>
      <Ui_Button primary>Listen!</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_15',
    title: 'Card with action start buttons',
    preview: (
      <>
        <Ui_Card cardSideLarge>
          <figure>
            <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>New album is released!</Ui_Card.Title>
            <p>Click the button to listen on Spotishy app.</p>
            <Ui_Card.Actions actionStart>
              <Ui_Button primary>Listen!</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card cardSideLarge bgBase100>
  <figure>
    <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>New album is released!</Ui_Card.Title>
      <p>Click the button to listen on Spotishy app.</p>
    <Ui_Card.Actions actionStart>
      <Ui_Button primary>Listen!</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
  {
    id: 'card_15',
    title: 'Card with action space between buttons',
    preview: (
      <>
        <Ui_Card cardSideLarge>
          <figure>
            <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
          </figure>
          <Ui_Card.Body>
            <Ui_Card.Title>New album is released!</Ui_Card.Title>
            <p>Click the button to listen on Spotishy app.</p>
            <Ui_Card.Actions actionSpaceBetween>
              <Ui_Button primary>Listen!</Ui_Button>
            </Ui_Card.Actions>
          </Ui_Card.Body>
        </Ui_Card>
      </>
    ),
    codeExample: `
<Ui_Card cardSideLarge bgBase100>
  <figure>
    <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
  </figure>
  <Ui_Card.Body>
    <Ui_Card.Title>New album is released!</Ui_Card.Title>
      <p>Click the button to listen on Spotishy app.</p>
    <Ui_Card.Actions actionSpaceBetween>
      <Ui_Button primary>Listen!</Ui_Button>
    </Ui_Card.Actions>
  </Ui_Card.Body>
</Ui_Card>`,
  },
]
