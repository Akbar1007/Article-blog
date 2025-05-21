import { Search } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
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
						<p className='text-2xl'>See posts by categories</p>
						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(category => (
								<Badge key={category.slug}>{category.name}</Badge>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-2 mt-4'>
						<p className='text-2xl'>See posts by tags</p>
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
