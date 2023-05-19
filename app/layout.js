import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"

export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router ',
}

storyblokInit({
  accessToken: 'ExrmykhjqnuEWjKBR4Nt1Att',
  use: [apiPlugin]
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
