'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getPopularCategories } from '@/service/category.service'
import { Badge } from '../ui/badge'
import { DrawerClose } from '../ui/drawer'

const PopularCategories = () => {
	const [categories, setCategories] = useState<
		{ name: string; slug: string }[]
	>([])

	useEffect(() => {
		const getPOpoularTags = async () => {
			const res = await getPopularCategories()
			setCategories(res)
		}

		getPOpoularTags()
	}, [])

	return (
		<div className='flex flex-wrap gap-2'>
			{categories.map(category => (
				<Link href={`/categories/${category.slug}`} key={category.slug}>
					<DrawerClose>
						<Badge variant={'secondary'} className='cursor-pointer text-xl'>
							{category.name}
						</Badge>
					</DrawerClose>
				</Link>
			))}
		</div>
	)
}

export default PopularCategories
