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
		bio: 'developer',
	},
	{
		name: 'author 2',
		image: '/authors/chris-impey.jpg',
		bio: 'developer2',
	},
	{
		name: 'author 3',
		image: '/authors/emma-hazel.jpg',
		bio: 'developer3',
	},
]

export const content =
	'<p><table ><tbody><tr><td><h5><strong>Segment</strong><em></em></h5></td><td><h5><strong>Long-fruited</strong></h5></td></tr><tr><td><h5><strong>Purpose</strong><em></em></h5></td><td><h5><strong>For fresh consumption and processing</strong></h5></td></tr><tr><td><h5><strong>Precoccity</strong><em></em></h5></td><td><h5><strong>Early ripening, 60-65 days after planting seedlings</strong></h5></td></tr><tr><td><h5><strong>Plant</strong><em></em></h5></td><td><h5><strong>Vigorous, open</strong></h5></td></tr><tr><td><h5><strong>Fruit</strong><em></em></h5></td><td><h5><strong>Elongated teardrop-shaped, with dense pulp</strong></h5></td></tr><tr><td><h5><strong>Color</strong><em></em></h5></td><td><h5><strong>Dark purple to black</strong></h5></td></tr><tr><td><h5><strong>Weight</strong><em></em></h5></td><td><h5><strong>200-250 g</strong></h5></td></tr><tr><td><h5><strong>Taste</strong><em></em></h5></td><td><h5><strong>Good</strong></h5></td></tr></tbody></table></p><p><blockquote><strong>ADVANTAGES</strong></blockquote><ul><li><div><strong>Early ripeness</strong></div></li><li><div><strong>Very high yield potential</strong></div></li><li><div><strong>Attractive fruits</strong></div></li><li><div><strong>Great for slicing</strong></div></li></ul></p><p><blockquote><strong>RECOMMENDATIONS FOR GROWING</strong></blockquote><ul><li><div><strong>Designed for cultivation in open ground</strong></div></li><li><div><strong>As well as in plastic greenhouses</strong></div></li></ul></p>'
