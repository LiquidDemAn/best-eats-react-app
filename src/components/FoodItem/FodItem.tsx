import { CategoryType, MenuItemType } from '../../typedef';
import { AiOutlinePlus } from 'react-icons/ai';

type Props = {
	item: MenuItemType;
	addToCart: (order: CategoryType) => void;
};

export const FoodItem = ({ item, addToCart }: Props) => {
	const { name, price, image } = item;

	return (
		<div
			onClick={() => addToCart(item)}
			className='relative border w-full shadow-lg hover:scale-105 rounded-lg cursor-pointer group transition'
		>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className='flex justify-center items-center h-52 bg-center bg-cover'
			>
				<button className='opacity-0 group-hover:opacity-100 rounded-full p-4 bg-orange-500 text-white border-transparent transition'>
					<AiOutlinePlus size={30} />
				</button>
			</div>
			<div className='flex items-center justify-between px-2 py-4 gap-1'>
				<p className='font-bold'>{name}</p>
				<p>
					<span className='bg-orange-500 text-white font-semibold p-1 rounded-full'>
						{price}
					</span>
				</p>
			</div>
		</div>
	);
};
