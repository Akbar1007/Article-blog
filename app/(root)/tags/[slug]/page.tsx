import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

import BlogCard from '@/components/cards/blog'
import { getBlogsByTag } from '@/service/tag.service'

interface Params {
	slug: string
}

export async function generateMetadata(props: { params: Promise<Params> }) {
	const params = await props.params
	const blog = await getBlogsByTag(params.slug)
	return {
		title: blog.name,
		// TODO: add description; add a new field for keywords to backend
	}
}

async function Page(props: { params: Promise<Params> }) {
	const params = await props.params
	const tag = await getBlogsByTag(params.slug)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>{tag.name}</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Tags</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
				{tag.blog.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default Page
