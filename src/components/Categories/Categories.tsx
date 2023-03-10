import { categories } from '../../data/data';
import { Category } from '../Category';

export const Categories = () => {
	return (
		<div>
			<h2 className='component-header'>Top Rated Menu Items</h2>

			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
				{categories.map((item) => (
					<Category key={item.id} category={item} />
				))}
			</div>
		</div>
	);
};
