import {
	Contact2,
	FileCode2,
	FolderArchive,
	Home,
	ListCollapse,
} from 'lucide-react'

export const navLinks = [
	{ name: 'Home', route: '/', icon: Home },
	{ name: 'Blogs', route: '/blogs', icon: FileCode2 },
	{ name: 'About', route: '/about', icon: ListCollapse },
	{ name: 'Archive', route: '/archive', icon: FolderArchive },
	{ name: 'Contact', route: '/contact', icon: Contact2 },
]

export const popularCategories = [
	{ name: 'Front End', slug: 'front-end' },
	{ name: 'Back End', slug: 'back-end' },
	{ name: 'Full Stack', slug: 'full-stack' },
	{ name: 'AI', slug: 'artificial-intelligence' },
	{ name: 'Mobile Dev', slug: 'mobile-dev' },
]

export const popularTags = [
	{ name: 'Java Script', slug: 'java-script' },
	{ name: 'TypeScript', slug: 'type-script' },
	{ name: 'React JS', slug: 'react-js' },
	{ name: 'Node JS', slug: 'node-js' },
	{ name: 'Next JS', slug: 'next-js' },
	{ name: 'TailwindCSS', slug: 'tailwind-css' },
]
