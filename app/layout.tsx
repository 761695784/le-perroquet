import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hôtel Le Perroquet Ziguinchor | Boutique Hôtel en Casamance, Sénégal',
  description: 'Séjournez à l\'Hôtel Le Perroquet à Ziguinchor, au bord du fleuve Casamance. 17 chambres climatisées, restaurant gastronomique, accueil chaleureux. Réservez maintenant.',
  keywords: 'hôtel Ziguinchor, Casamance, Sénégal, boutique hôtel, fleuve Casamance, hébergement Ziguinchor, tourisme Sénégal',
  authors: [{ name: 'Hôtel Le Perroquet' }],
  openGraph: {
    title: 'Hôtel Le Perroquet | L\'Âme de la Casamance',
    description: 'Un hôtel boutique au bord du fleuve — intimité, nature et authenticité africaine',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Hôtel Le Perroquet',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-light-base`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
