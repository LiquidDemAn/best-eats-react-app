import { categories } from '../../data/data';

export const Category = () => {
	return (
		<div>
			<h1 className='component-header'>Top Rated Menu Items</h1>

			{/* Categories */}
			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
				{categories.map((item) => (
					<div
						key={item.id}
						className=' flex justify-between items-center bg-gray-100 p-4 rounded-xl hover:scale-105 transition cursor-pointer'
					>
						<h2 className='font-bold sm:text-xl'>{item.name}</h2>
						<img className='w-20' src={item.image} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	);
};
