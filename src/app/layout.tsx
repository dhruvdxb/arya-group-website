import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arya Group | Luxury Swimming Pool Architecture',
  description:
    'Crafting premium swimming pool experiences for villas, farmhouses, resorts, and luxury properties across India.',
  keywords: 'luxury pool, swimming pool architecture, infinity pool, resort pool, villa pool, Arya Group',
  openGraph: {
    title: 'Arya Group | Luxury Swimming Pool Architecture',
    description: 'Premium pool design and construction for the discerning few.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}