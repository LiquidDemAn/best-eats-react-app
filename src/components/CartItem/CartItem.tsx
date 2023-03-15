import { useContext } from 'react';
import { CartItemType, MenuItemType } from '../../typedef';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { AppContext } from '../../context';

type Props = {
	item: MenuItemType;
};

export const CartItem = ({ item }: Props) => {
	const { addToCart, removeFromCart, removeAllFromCart } =
		useContext(AppContext);

	const addToCartHandler = () => {
		addToCart(item);
	};

	const removeFromCartHandler = () => {
		removeFromCart(item.id);
	};

	const removeAllFromCartHandler = () => {
		removeAllFromCart(item.id);
	};

	return (
		<div className='flex gap-6 w-[320px] items-center bg-gray-300 p-2 rounded-2xl'>
			<img
				className='w-28 h-28 rounded-lg object-cover'
				src={item.image}
				alt={item.name}
			/>
			<div>
				{/* Item Info */}
				<div className='flex flex-col gap-2'>
					<h5 className='font-semibold'>{item.name}</h5>
					<span className='price'>{item.price}</span>
					{/* Add/Count/Remove */}
					<div className='flex gap-2'>
						<button
							onClick={addToCartHandler}
							className='p-1 rounded-xl bg-green-500  border-transparent'
						>
							<AiOutlinePlus />
						</button>
						<p>{item.count ? item.count : 0}</p>
						<button
							onClick={removeFromCartHandler}
							className={`p-1 rounded-xl  border-transparent ${
								item.count ? 'bg-orange-500' : 'bg-orange-500/30'
							}`}
						>
							<AiOutlineMinus />
						</button>

						<button
							onClick={removeAllFromCartHandler}
							className={`ml-6 p-1 rounded-xl  border-transparent ${
								item.count ? 'bg-red-500' : 'bg-red-500/30'
							}`}
						>
							<BsTrash />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
