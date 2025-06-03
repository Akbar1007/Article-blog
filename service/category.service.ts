import request, { gql } from 'graphql-request'
import { cache } from 'react'

import { IBlog, ICategoryAndTags } from '@/types'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByCategory = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				blogs {
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

	const { category } = await request<{
		category: { blogs: IBlog[]; name: string; description: string }
	}>(graphQLAPI, query, { slug })
	return category
})

export const getCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				name
				slug
			}
		}
	`

	const { categories } = await request<{ categories: ICategoryAndTags[] }>(
		graphQLAPI,
		query
	)
	return categories
}
