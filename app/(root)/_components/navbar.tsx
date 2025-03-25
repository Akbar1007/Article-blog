import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
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
							className='hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sd transition-colors'
						>
							{link.name}
						</Link>
					))}
				</div>

				<div className='flex items-center gap-1'>
					<div className='hover:bg-blue-400/20 cursor-pointer rounded-sd transition-colors flex items-center gap-1 py-2 px-3'>
						<span className='hidden md:flex'>Search</span>
						<Search className='w-4 h-4' />
					</div>

					<ModeToggle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
