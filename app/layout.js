import { League_Spartan, Montserrat } from 'next/font/google'
import {Providers} from "./providers";
import './globals.css'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan'
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Hiring Umar',
  description: 'Why Umar should be your next Design Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${leagueSpartan.variable} scroll-smooth`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
