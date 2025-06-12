'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getPopularTags } from '@/service/tag.service'
import { Badge } from '../ui/badge'
import { DrawerClose } from '../ui/drawer'

const PopularTags = () => {
	const [tags, setTags] = useState<{ name: string; slug: string }[]>([])

	useEffect(() => {
		const getPopoularTags = async () => {
			const res = await getPopularTags()
			setTags(res)
		}

		getPopoularTags()
	}, [])

	return (
		<div className='flex flex-wrap gap-2'>
			{tags.map(tag => (
				<Link href={`/tags/${tag.slug}`} key={tag.slug}>
					<DrawerClose>
						<Badge className='cursor-pointer text-xl'>{tag.name}</Badge>
					</DrawerClose>
				</Link>
			))}
		</div>
	)
}

export default PopularTags
