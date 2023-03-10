import { CategoryType } from '../../typedef';

type Props = {
	category: CategoryType;
};

export const Category = ({ category }: Props) => {
	const { name, image } = category;

	return (
		<div className=' flex justify-between items-center bg-gray-100 p-4 rounded-xl hover:scale-105 transition cursor-pointer'>
			<h2 className='font-bold sm:text-xl'>{name}</h2>
			<img className='w-20' src={image} alt={name} />
		</div>
	);
};
