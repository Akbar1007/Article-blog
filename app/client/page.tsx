'use client'

import { Service } from '@/server'
import { useEffect, useState } from 'react'

function ClientPage() {
	const [isPending, setIsPending] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		setIsPending(true)
		Service.getPosts()
			.then(response => setData(response))
			.finally(() => setIsPending(false))
	}, [])

	return (
		<div>
			<h1 className='text-4xl font-mono py-6'>Client Comp</h1>
			{isPending && 'Loading...'}
			{data && data.map(c => <p key={c.id}>{c.username}</p>)}
			<div>Client Page</div>
		</div>
	)
}

export default ClientPage
