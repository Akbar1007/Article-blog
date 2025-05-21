import Image from 'next/image'

const EndFooter = () => {
	return (
		<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
			<a
				className='flex items-center gap-2 hover:underline hover:underline-offset-4'
				href=''
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
					aria-hidden
					src='/file.svg'
					alt='File icon'
					width={16}
					height={16}
				/>
				Telegram
			</a>
			<a
				className='flex items-center gap-2 hover:underline hover:underline-offset-4'
				href=''
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
					aria-hidden
					src='/window.svg'
					alt='Window icon'
					width={16}
					height={16}
				/>
				Examples
			</a>
			<a
				className='flex items-center gap-2 hover:underline hover:underline-offset-4'
				href=''
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
					aria-hidden
					src='/globe.svg'
					alt='Globe icon'
					width={16}
					height={16}
				/>
				Go to my GitHub→
			</a>
		</footer>
	)
}

export default EndFooter
