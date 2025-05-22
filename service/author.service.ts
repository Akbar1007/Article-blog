import request, { gql } from 'graphql-request'

import { IAuthor } from '@/types'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthors = async () => {
	const query = gql`
		query MyQuery {
			authors {
				name
				bio
				id
				image {
					url
				}
				blogs {
					id
				}
			}
		}
	`

	const { authors } = await request<{ authors: IAuthor[] }>(graphQLAPI, query)
	return authors
}

export const getDetailedAuthor = async (id: string) => {
	const query = gql`
		query MyQuery($id: $String!) {
			author(where: { id: $id }) {
				name
				bio
				image {
					url
				}
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
			}
		}
	`

	const { author } = await request<{
		author: IAuthor
	}>(graphQLAPI, query, { id })
	return author
}
