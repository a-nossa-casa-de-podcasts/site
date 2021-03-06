import { Story, Meta } from '@storybook/react/types-6-0'
import Footer, { FooterProps } from '.'

import mockFooterLinksProps from './mock'

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ancp-light'
    }
  },
  args: mockFooterLinksProps
} as Meta

export const Default: Story<FooterProps> = (args) => (
  <div>
    <Footer {...args} />
  </div>
)
