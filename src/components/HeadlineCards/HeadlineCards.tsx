import { memo } from 'react';
import { headlineCards } from '../../data/data';

export const HeadlineCards = memo(() => {
	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12'>
			{headlineCards.map(({ id, img, title, subtitle }) => (
				<div key={id} className='relative rounded-xl'>
					<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/10 to-black/60 rounded-xl'></div>

					{/* Content */}
					<div className='absolute h-full flex gap-3 flex-col p-3 text-white'>
						<h2 className='font-bold text-2xl'>{title}</h2>
						<span>{subtitle}</span>

						<button className='btn-hover absolute bottom-4 w-40 bg-white border-transparent text-black font-semibold text-lg py-2'>
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
});
