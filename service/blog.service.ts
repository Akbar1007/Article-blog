import request, { gql } from 'graphql-request'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs {
				title
				author {
					name
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
			}
		}
	`

	const res = await request(graphQLAPI, query)
	return res
}
