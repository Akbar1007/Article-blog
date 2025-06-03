export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	author: IAuthor
	category: ICategoryAndTags
	description: string
	tag: ICategoryAndTags
	image: { url: string }
	createdAt: string
	content: { html: string }
	slug: string
}

export interface IAuthor {
	name: string
	bio: string
	id: string
	image: { url: string }
	blogs: IBlog[]
}

export interface ICategoryAndTags {
	name: string
	slug: string
	blogs: IBlog[]
}

export interface IArchieveBlog {
	year: string
	blogs: IBlog[]
}
