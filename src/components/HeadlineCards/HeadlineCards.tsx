import React from 'react';

const cards = [
	{
		id: 1,
		img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
		title: `Sun's Out, BOGO's Out`,
		subtitle: 'Through 8/26',
	},
	{
		id: 2,
		img: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600',
		title: `New Restaurants`,
		subtitle: 'Added Daily',
	},
	{
		id: 3,
		img: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600',
		title: `We Deliver Desserts Too`,
		subtitle: 'Through 8/26',
	},
];

export const HeadlineCards = () => {
	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12'>
			{cards.map(({ id, img, title, subtitle }) => (
				<div key={id} className='relative rounded-xl'>
					<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/10 to-black/60 rounded-xl'></div>

					{/* Content */}
					<div className='absolute h-full flex gap-3 flex-col p-3 text-white'>
						<h2 className='font-bold text-2xl'>{title}</h2>
						<span>{subtitle}</span>

						<button className='absolute bottom-4 w-40 bg-white border-transparent text-black font-semibold text-lg py-2'>
							Order Now
						</button>
					</div>

					<img
						className='w-full max-h-[160px] object-cover rounded-xl md:max-h-[200px]'
						src={img}
						alt={`item-${id}`}
					/>
				</div>
			))}
		</div>
	);
};
