import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

import CategoriesTagsCard from '@/components/cards/categories-tags'
import { getTags } from '@/service/tag.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'All Tags',
}

async function Page() {
	const tags = await getTags()

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Tags</span>
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

			<div className='grid grid-cols-1 max-md:grid-cols-2 lg:grid-cols-3 mt-24 gap-6'>
				{tags.map(tag => (
					<CategoriesTagsCard key={tag.slug} {...tag} type='tags' />
				))}
			</div>
		</div>
	)
}

export default Page
