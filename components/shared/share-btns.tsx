'use client'

import { Link2, Send } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { toast } from 'sonner'

import { Button } from '../ui/button'

const ShareBtns = () => {
	const pathname = usePathname()

	const onCopy = () => {
		const link = process.env.NEXT_PUBLIC_BASE_URL + pathname
		navigator.clipboard.writeText(link).then(() => {
			toast.success('Link copied to clipboard!')
		})
	}

	return (
		<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
			<Button size={'icon'} variant={'outline'} onClick={onCopy}>
				<BsTwitterX />
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy}>
				<FaFacebook />
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy}>
				<FaLinkedin />
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy}>
				<Send />
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy}>
				<Link2 />
			</Button>
		</div>
	)
}

export default ShareBtns
