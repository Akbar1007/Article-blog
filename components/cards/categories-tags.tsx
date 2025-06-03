import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

import { ICategoryAndTags } from '@/types'

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags'
}

function CategoriesTagsCard(item: Props) {
	return (
		<Link
			className='bg-secondary p-4 md:p-8 rounded-md shadow-xl  hover:bg-secondary/80 transition-colors dark:shadow-white/10'
			href={`/${item.type}/${item.slug}`}
		>
			<div className='flex items-center gap-4 justify-center'>
				{item.type === 'tags' ? <Tags /> : <Layers2 />}
				<h1 className='text-2xl font-creteRound'>{item.name}</h1>
			</div>
			<div className='flex justify-center mt-2 text-xl'>
				{item.blogs.length === 0 ? (
					<p> No blogs yet.</p>
				) : item.blogs.length > 0 ? (
					<p>
						{item.blogs.length === 1 ? '1 Blog' : `${item.blogs.length} Blogs`}
					</p>
				) : null}
			</div>
		</Link>
	)
}

export default CategoriesTagsCard
