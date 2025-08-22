import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | HARSHHAA',
  description: 'My Personal Portfolio - Showcasing my Work and Skills.',
  keywords: ['DevOps', 'Cloud Engineer', 'AWS', 'Azure', 'Kubernetes', 'Terraform', 'Portfolio'],
  authors: [{ name: 'Harshhaa Vardhan Reddy' }],
  creator: 'Harshhaa Vardhan Reddy',
  publisher: 'Harshhaa Vardhan Reddy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://notharshhaa.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Portfolio | HARSHHAA',
    description: 'My Personal Portfolio - Showcasing my Work and Skills.',
    url: 'https://notharshhaa.site',
    siteName: 'HARSHHAA Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'HARSHHAA Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | HARSHHAA',
    description: 'My Personal Portfolio - Showcasing my Work and Skills.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
