import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
// @ts-expect-error Side-effect CSS import is resolved by Next.js bundling.
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
	title: 'Peter Yungman',
	description:
		'Welcome to my portfolio! I\'m a Computer Science student at the University of Florida passionate about artificial intelligence, healthcare technology, and creating impactful software.',
	keywords: [
		'Artificial Intelligence',
		'Healthcare Technology',
		'University of Florida',
		'Software Engineering',
		'Mobile App Development',
		'UI/UX Design',
		'AI Research',
		'Peter Yungman',
		'Computer Science',
		'Developer Portfolio',
	],
	authors: [{ name: 'Peter Yungman' }],
	creator: 'Peter Yungman',
	openGraph: {
		title: 'Peter Yungman – Developer Portfolio',
		description:
			'Computer Science student and aspiring software engineer passionate about AI, healthcare technology, and building innovative solutions.',
		url: 'https://peteryungman.com',
		siteName: 'Peter Yungman – Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Peter Yungman – Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Peter Yungman – Developer Portfolio',
		description:
			'Computer Science student and aspiring software engineer passionate about AI, healthcare technology, and building innovative solutions.',
		creator: '@peteryungman',
		images: ['/og-image.jpg'],
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
	icons: {
		icon: [
			{ url: '/favicon.png', type: 'image/png' },
			{ url: '/favicon.ico' },
			{ url: '/favicon-32x32.png', sizes: '32x32' },
			{ url: '/favicon-16x16.png', sizes: '16x16' },
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
