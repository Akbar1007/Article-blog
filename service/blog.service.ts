import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs {
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

export const getDetailedBlog = async (slug: string) => {
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
				title
			}
		}
	`

	const { blog } = await request<{ blog: IBlog }>(graphQLAPI, query, { slug })
	return blog
}
