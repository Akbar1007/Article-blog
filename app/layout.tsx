import { Crete_Round, Work_Sans } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import './globals.css'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-crete-round',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-work-sans',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://article-blog-liart.vercel.app'),
	title: 'AG | Blog',
	description: 'Posts about programming, software development, and technology.',
	authors: [{ name: 'Akbar Axmedov', url: 'https://t.me/Akhmedov_Akbar' }],
	icons: { icon: '/favicon.png' },
	keywords:
		'ag blog, ag, blog, programming, articles, blog, software development, coding, tutorials, tips, news, technology, web development, mobile development, backend development, frontend development, devops, machine learning, data science, tailwindcss, akbar axmedov',
	openGraph: {
		title: 'AG Blog | Posts about programming',
		description:
			'Posts about programming, software development, and technology.',
		type: 'website',
		url: 'https://article-blog-liart.vercel.app',
		locale: 'en_EN',
		images:
			'https://eu-west-2.graphassets.com/cm8vhvobc170d07mi3kuwde6v/output=format:jpg/cmazcpaazlf2d07mlafeh2nbd',
		countryName: 'Uzbekistan',
		siteName: 'AG Blog',
		emails: 'a.akbarjon007@gmail.com',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					// TODO: srotage key to local storage:
					storageKey='blog-theme'
				>
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
