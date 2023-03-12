import React, { useContext } from 'react';
import { CartItemType } from '../../typedef';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { AppContext } from '../../context';

type Props = {
	item: CartItemType;
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
		<div className='flex gap-3 bg-gray-300 p-2 rounded-2xl'>
			<img
				className='w-24 h-24 rounded-lg object-cover'
				src={item.image}
				alt={item.name}
			/>
			<div>
				{/* Item Info */}
				<div className='flex flex-col gap-2'>
					<h5 className='font-semibold'>{item.name}</h5>
					<p>{item.price}</p>
					{/* Add/Count/Remove */}
					<div className='flex gap-2'>
						<button
							onClick={addToCartHandler}
							className='p-1 rounded-xl bg-green-500  border-transparent'
						>
							<AiOutlinePlus />
						</button>
						<p>{item.count}</p>
						<button
							onClick={removeFromCartHandler}
							className='p-1 rounded-xl bg-orange-500 border-transparent'
						>
							<AiOutlineMinus />
						</button>

						<button
							onClick={removeAllFromCartHandler}
							className='ml-6 p-1 rounded-xl bg-red-500 border-transparent'
						>
							<BsTrash />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
