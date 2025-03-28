import {
	Contact2,
	FileCode2,
	FolderArchive,
	Home,
	ListCollapse,
} from 'lucide-react'

export const navLinks = [
	{ name: 'Home', route: '/', icon: Home },
	{ name: 'About', route: '/about', icon: ListCollapse },
	{ name: 'Blogs', route: '/blogs', icon: FileCode2 },
	{ name: 'Archive', route: '/archive', icon: FolderArchive },
	{ name: 'Contact', route: '/contact', icon: Contact2 },
]

export const popularCategories = [
	{ name: 'Front End', slug: 'front-end' },
	{ name: 'Back End', slug: 'back-end' },
	{ name: 'Full Stack', slug: 'full-stack' },
	{ name: 'AI', slug: 'artificial-intelligence' },
]

export const popularTags = [
	{ name: 'Java Script', slug: 'java-script' },
	{ name: 'React JS', slug: 'react-js' },
	{ name: 'Node JS', slug: 'node-js' },
	{ name: 'Next JS', slug: 'next-js' },
]

export const blogs = [
	{
		title: 'The AGI hype train is running out of steam',
		description:
			"While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they've become quieter lately. Peter Thiel.",
		author: 'Samar',
		tags: ['Machine learning'],
		date: 'Dec 5, 2021',
		image: '/blogs/01.jpg',
	},
	{
		title: 'Creating an object that travels at 1% the speed of light?',
		description:
			'Light is fast. In fact, it is the fastest thing that exists, and a law of the universe is that nothing can move faster than light. Light travels.',
		author: 'Shokh',
		tags: ['Front End'],
		date: 'Jan 12, 2021',
		image: '/blogs/02.jpg',
	},

	{
		title: 'Everything you wanted to know about the metaverse',
		description:
			'In the wake of Facebook rebranding as Meta, reflecting its focus on the "metaverse", Microsoft has now announced it, too, will launch into this.',
		author: 'Yusuf',
		tags: ['Backend'],
		date: 'June 5, 2022',
		image: '/blogs/03.jpg',
	},
	{
		title:
			'How to hire a developer straight out of bootcamp - without getting burned',
		description:
			"There's a worldwide talent shortage in software development, and nearly one-third of hiring managers have hired someone from a coding bootcamp.",
		author: 'Samar',
		tags: ['Full Stack'],
		date: 'Dec 12, 2021',
		image: '/blogs/04.jpg',
	},
]

export const authors = [
	{
		name: 'author 1',
		image: '/authors/thomas-macaulay.jpg',
	},
	{
		name: 'author 2',
		image: '/authors/chris-impey.jpg',
	},
	{
		name: 'author 3',
		image: '/authors/emma-hazel.jpg',
	},
]
