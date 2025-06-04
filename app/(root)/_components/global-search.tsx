'use client'

import { debounce } from 'lodash'
import { Loader2, Minus, Search } from 'lucide-react'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

import SearchCard from '@/components/cards/search'
import PopularTags from '@/components/shared/popular-tags'
import { Badge } from '@/components/ui/badge'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { popularCategories } from '@/constants'
import { getSearchBlogs } from '@/service/blog.service'
import { IBlog } from '@/types'

const GlobalSearch = () => {
	const [isPending, setIsPending] = useState(false)
	const [blogs, setBlogs] = useState<IBlog[]>([])
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase()
		setSearchTerm(text)

		if (text && text.length > 2) {
			setIsPending(true)
			const data = await getSearchBlogs(text)
			setBlogs(data)
			setIsPending(false)
		} else {
			setBlogs([])
			setIsPending(false)
		}
	}

	const debounceSearch = debounce(handleSearch, 2000)

	return (
		<Drawer>
			<DrawerTrigger>
				<div className='hover:bg-blue-400/20 cursor-pointer rounded-sd transition-colors flex items-center gap-1 py-2 px-3'>
					<span className='hidden md:flex'>Search</span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container max-w-6xl mx-auto pb-12'>
					<div className='text-xl py-3 flex justify-center'>
						<DrawerTitle>Search Panel</DrawerTitle>
						<Search className='w-6 h-6' />
					</div>
					<Input
						className='bg-secondary mt-2'
						placeholder='Search blog...'
						aria-label='search-blog'
						onChange={debounceSearch}
						disabled={isPending}
					/>

					{isPending && <Loader2 className='animate-spin mt-4 mx-auto' />}
					{searchTerm && blogs.length === 0 ? (
						<div className='text-2xl font-creteRound mt-8'>No blogs found.</div>
					) : blogs.length > 0 ? (
						<div className='text-2xl font-creteRound mt-8'>
							{blogs.length === 1
								? '1 Blog found.'
								: `${blogs.length} Blogs found.`}
						</div>
					) : null}
					<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
						{blogs &&
							blogs.map(blog => <SearchCard key={blog.slug} {...blog} />)}
					</div>
					{blogs.length ? <Separator className='mt-3' /> : null}

					{/* TODO: if there is no blog for this category or blog, show it to the user and redirect to the home page*/}

					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex item-center gap-2'>
							<p className='text-2xl'>See posts by categories</p>
							<Minus className='mt-1' />
							<Link href={'/categories'}>
								<DrawerClose className='text-blue-500 cursor-pointer text-xl underline hover:opacity-90 mt-1'>
									See all{' '}
								</DrawerClose>
							</Link>
						</div>

						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(category => (
								<Link href={`/categories/${category.slug}`} key={category.slug}>
									<DrawerClose>
										<Badge
											variant={'secondary'}
											className='cursor-pointer text-xl'
										>
											{category.name}
										</Badge>
									</DrawerClose>
								</Link>
							))}
						</div>
					</div>

					<Separator className='mt-4' />

					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex item-center gap-2'>
							<p className='text-2xl'>See posts by tags</p>
							<Minus className='mt-1' />
							<Link href={'/tags'}>
								<DrawerClose className='text-blue-500 cursor-pointer text-xl underline hover:opacity-90 mt-1'>
									See all{' '}
								</DrawerClose>
							</Link>
						</div>
						<div className='flex flex-wrap gap-2'>
							<PopularTags />
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
