import request, { gql } from 'graphql-request'

import { IBlog, ICategoryAndTags } from '@/types'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByCategory = async (slug: string) => {
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
			}
		}
	`

	const { category } = await request<{
		category: { blogs: IBlog[]; name: string }
	}>(graphQLAPI, query, { slug })
	return category
}

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
