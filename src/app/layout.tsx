import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Comic_Neue as ComicNeue,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const comicNeue = ComicNeue({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-comic-neue',
})

export const metadata = {
  title: 'Spider-Man',
  description: 'Página do filme Spider-Man across the spider verse',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} ${roboto.variable} font-sans text-white`}
      >
        {children}
      </body>
    </html>
  )
}
