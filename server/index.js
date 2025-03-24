export const Service = {
	getPosts: async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users')

		if (!res.ok) {
			throw new Error('Could not fetch users')
		}

		const data = await res.json()

		return data
	},
}
