import request, { gql } from 'graphql-request'

import { IBlog, ICategoryAndTags } from '@/types'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTag = async (slug: string) => {
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
			}
		}
	`

	const { tag } = await request<{ tag: { blog: IBlog[]; name: string } }>(
		graphQLAPI,
		query,
		{ slug }
	)
	return tag
}

export const getTags = async () => {
	const query = gql`
		query MyQuery {
			tags {
				name
				slug
			}
		}
	`

	const { tags } = await request<{ tags: ICategoryAndTags[] }>(
		graphQLAPI,
		query
	)
	return tags
}
