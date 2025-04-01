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
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphQLAPI, query)
	return blogs
}
