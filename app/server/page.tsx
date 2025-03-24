import { Service } from '@/server'

async function ServerPage() {
	const data = await Service.getPosts()
	return (
		<div>
			<h1 className='text-4xl font-mono py-6'>Server Comp</h1>
			{data && data.map(c => <p key={c.id}>{c.username}</p>)}
		</div>
	)
}

export default ServerPage
