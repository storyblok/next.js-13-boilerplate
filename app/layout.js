import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader'

import Page from "@/components/Page"
import Grid from "@/components/Grid"
import Feature from "@/components/Feature"
import Teaser from "@/components/Teaser"

export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router ',
}

storyblokInit({
  accessToken: 'ExrmykhjqnuEWjKBR4Nt1Att',
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    page: Page,
    teaser: Teaser
  }

})

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>{children}</body>
        <StoryblokBridgeLoader options={{}} />
      </html>
  )
}
