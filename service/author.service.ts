import request, { gql } from 'graphql-request'

import { IAuthor } from '@/types'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthors = async () => {
	const query = gql`
		query MyQuery {
			authors {
				name
				bio
				image {
					url
				}
			}
		}
	`

	const { authors } = await request<{ authors: IAuthor[] }>(graphQLAPI, query)
	return authors
}
