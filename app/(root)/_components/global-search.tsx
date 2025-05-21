import { Minus, Search } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'

const GlobalSearch = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				<div className='hover:bg-blue-400/20 cursor-pointer rounded-sd transition-colors flex items-center gap-1 py-2 px-3'>
					<span className='hidden md:flex'>Search</span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container max-w-6xl mx-auto py-12'>
					<Input
						className='bg-secondary'
						placeholder='Search blog...'
						aria-label='search-blog'
					/>

					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex item-center gap-2'>
							<p className='text-2xl'>See posts by categories</p>
							<Minus className='mt-1' />
							<Link
								href={'/categories'}
								className='text-blue-500 text-xl hover:opacity-90 mt-1'
							>
								<DrawerClose className='underline'>See all </DrawerClose>
							</Link>
						</div>

						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(category => (
								<Badge key={category.slug}>{category.name}</Badge>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex item-center gap-2'>
							<p className='text-2xl'>See posts by tags</p>
							<Minus className='mt-1' />
							<Link
								href={'/tags'}
								className='text-blue-500 hover:opacity-90 text-xl mt-1'
							>
								<DrawerClose className='underline'>See all </DrawerClose>
							</Link>
						</div>
						<div className='flex flex-wrap gap-2'>
							{popularTags.map(tag => (
								<Badge key={tag.slug}>{tag.name}</Badge>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
