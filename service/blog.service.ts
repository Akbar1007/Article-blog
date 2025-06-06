import request, { gql } from 'graphql-request'
import { cache } from 'react'

import { IArchieveBlog, IBlog } from '@/types'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(first: 10, where: { archive: false }) {
				title
				author {
					name
					image {
						url
					}
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				image {
					url
				}
				createdAt
				content {
					html
				}
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphQLAPI, query)
	return blogs
}

export const getDetailedBlog = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				id
				author {
					name
					image {
						url
					}
					bio
					id
				}
				content {
					html
				}
				createdAt
				image {
					url
				}
				slug
				tag {
					name
					slug
				}
				category {
					name
					slug
				}
				title
				description
			}
		}
	`

	const { blog } = await request<{ blog: IBlog }>(graphQLAPI, query, { slug })
	return blog
})

export const getSearchBlogs = async (title: string) => {
	const query = gql`
		query MyQuery($title: String!) {
			blogs(where: { title_contains: $title }) {
				title
				image {
					url
				}
				slug
				createdAt
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphQLAPI, query, {
		title,
	})
	return blogs
}

export const getArchiveBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: true }) {
				title
				createdAt
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphQLAPI, query)

	const filteredBlogs = blogs.reduce(
		(acc: { [year: string]: IArchieveBlog }, blog: IBlog) => {
			const year = blog.createdAt.substring(0, 4)
			if (!acc[year]) {
				acc[year] = { year, blogs: [] }
			}
			acc[year].blogs.push(blog)
			return acc
		},
		{}
	)
	const results: IArchieveBlog[] = Object.values(filteredBlogs)

	return results
}
