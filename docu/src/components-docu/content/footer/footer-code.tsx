import { HashtagIcon } from '@heroicons/react/solid'
import { Ui_Button, Ui_Footer, Ui_Input } from '@vermorxt/pandora_ui'

export const footerCodeExamples = [
  {
    id: 'footer-1',
    title: 'Footer simple',
    preview: (
      <Ui_Footer id="footer-1" bgColor="neutral">
        <div>
          <Ui_Footer.Title>Services</Ui_Footer.Title>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </Ui_Footer>
    ),
    codeExample: `
<Ui_Footer bgColor="neutral">
  <div>
    <Ui_Footer.Title>Services</Ui_Footer.Title>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div>
  <div>
    <span className="footer-title">Company</span>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div>
  <div>
    <span className="footer-title">Legal</span>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</Ui_Footer>`,
  },
  {
    id: 'footer-2',
    title: 'Footer with icon',
    preview: (
      <Ui_Footer id="footer-2" bgColor="neutral">
        <div>
          <HashtagIcon className="w-20" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </Ui_Footer>
    ),
    codeExample: `
<Ui_Footer bgColor="neutral">
  <div>
    <HashtagIcon className="w-20" />
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </div>
  <div>
    <span className="footer-title">Services</span>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div>
  <div>
    <span className="footer-title">Company</span>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div>
  <div>
    <span className="footer-title">Legal</span>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</Ui_Footer>`,
  },
  {
    id: 'footer-3',
    title: 'Footer with form',
    preview: (
      <Ui_Footer id="footer-3" bgColor="neutral">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <Ui_Input placeholder="username@site.com" bordered className="pr-32 w-full" />
              <Ui_Button primary className="absolute rounded-l-none right-0">
                Subscribe
              </Ui_Button>
            </div>
          </div>
        </div>
      </Ui_Footer>
    ),
    codeExample: `
const menuItems = [
<Ui_Footer bgColor="neutral">
  <div>
    <span className="footer-title">Services</span>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div>
  <div>
    <span className="footer-title">Company</span>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div>
  <div>
    <span className="footer-title">Legal</span>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title">Newsletter</span>
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="relative">
        <Ui_Input placeholder="username@site.com" bordered className="pr-32 w-full" />
        <Ui_Button primary className="absolute rounded-l-none right-0">
          Subscribe
        </Ui_Button>
      </div>
    </div>
  </div>
</Ui_Footer>`,
  },
  {
    id: 'footer-4',
    title: 'Footer centered rounded and with shadow',
    preview: (
      <Ui_Footer id="footer-4" rounded shadow center bgColor="neutral" className="p-4">
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </Ui_Footer>
    ),
    codeExample: `
<Ui_Footer id="footer-4" rounded shadow center bgColor="neutral" className="p-4">
  <div>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</Ui_Footer>
    ),`,
  },
  {
    id: 'footer-5',
    title: 'Footer simple',
    preview: (
      <Ui_Footer id="footer-5" rounded bgColor="neutral" className="grid-rows-2 p-10">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
        <div>
          <span className="footer-title">Explore</span>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </div>
        <div>
          <span className="footer-title">Apps</span>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </div>
      </Ui_Footer>
    ),
    codeExample: `
<Ui_Footer rounded bgColor="neutral" className="grid-rows-2 p-10">
  <div>
    <span className="footer-title">Services</span>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div>
  <div>
    <span className="footer-title">Company</span>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div>
  <div>
    <span className="footer-title">Legal</span>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title">Social</span>
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">Github</a>
  </div>
  <div>
    <span className="footer-title">Explore</span>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Enterprise</a>
    <a className="link link-hover">Security</a>
    <a className="link link-hover">Pricing</a>
  </div>
  <div>
    <span className="footer-title">Apps</span>
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </div>
</Ui_Footer>`,
  },
  {
    id: 'footer-5',
    title: 'Footer background color',
    preview: (
      <Ui_Footer bgColor="primary" className="p-4">
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </Ui_Footer>
    ),
    codeExample: `
<Ui_Footer bgColor="primary" className="p-4">
  <div>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</Ui_Footer>
    ),`,
  },
]
