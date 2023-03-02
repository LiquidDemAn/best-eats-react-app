export const Hero = () => {
	return (
		<div className='max-h-[500px] relative mb-12'>
			{/* Gradient */}
			<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/10 to-black/30'></div>

			{/* Text */}
			<div className='px-4 z-10 absolute h-full text-gray-200 flex items-center'>
				<h1 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl '>
					The{' '}
					<span className='text-orange-500'>
						Best <br /> Foods
					</span>{' '}
					Delivered
				</h1>
			</div>

			<img
				className='w-full max-h-[500px] object-cover'
				src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'
				alt='hero'
			/>
		</div>
	);
};
