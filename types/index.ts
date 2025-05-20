export interface ChildProps {
	children: React.ReactNode
}

export type Params = {
	params: {
		slug: string
	}
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
	image: { url: string }
	bio: string
}

export interface ICategoryAndTags {
	name: string
	slug: string
}
