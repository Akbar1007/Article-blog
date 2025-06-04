import request, { gql } from 'graphql-request'
import { cache } from 'react'

import { IBlog, ICategoryAndTags } from '@/types'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTag = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blog {
					description
					author {
						name
						image {
							url
						}
						bio
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
				}
				name
				description
			}
		}
	`

	const { tag } = await request<{
		tag: { blog: IBlog[]; name: string; description: string }
	}>(graphQLAPI, query, { slug })
	return tag
})

export const getTags = async () => {
	const query = gql`
		query MyQuery {
			tags {
				name
				slug
				blogs {
					id
				}
			}
		}
	`

	const { tags } = await request<{ tags: ICategoryAndTags[] }>(
		graphQLAPI,
		query
	)
	return tags
}

export const getPopularTags = async () => {
	const query = gql`
		query MyQuery {
			tags(first: 6) {
				name
				slug
			}
		}
	`

	const { tags } = await request<{
		tags: { name: string; slug: string }[]
	}>(graphQLAPI, query)
	return tags
}
