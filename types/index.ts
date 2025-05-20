export interface ChildProps {
	children: React.ReactNode
}

export type PageProps = {
	params: { [key: string]: string }
	searchParams?: { [key: string]: string | string[] | undefined }
}

export type PagePropsWithSlug = {
	params: { slug: string }
	searchParams?: { [key: string]: string | string[] | undefined }
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
