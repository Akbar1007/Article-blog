'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import GlobalSearch from './global-search'
import Mobile from './sheet-mobile'

function Navbar() {
	const pathName = usePathname()

	return (
		<div className='h-[10vh] backdrop-blur-sd border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>AG Blog</h1>
				</Link>
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(link => (
						<Link
							key={link.route}
							href={link.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sd transition-colors',
								pathName === link.route && 'bg-blue-400/25'
							)}
						>
							{link.name}
						</Link>
					))}
				</div>

				<div className='flex items-center gap-1'>
					<GlobalSearch />
					<ModeToggle />
					<Mobile />
				</div>
			</div>
		</div>
	)
}

export default Navbar
