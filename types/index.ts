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
	content: { text: string }
}

export interface IAuthor {
	name: string
	image: { url: string }
}

export interface ICategoryAndTags {
	name: string
	slug: string
}
