import { MenuItemType } from '../../typedef';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoCheckmark } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context';

type Props = {
	item: MenuItemType;
};

export const FoodItem = ({ item }: Props) => {
	const { name, price, image } = item;
	const { addToCart } = useContext(AppContext);
	const [clicked, setClicked] = useState(false);

	const addToCardHandler = () => {
		addToCart(item);
		setClicked(true);
	};

	useEffect(() => {
		if (clicked) {
			setTimeout(() => {
				setClicked(false);
			}, 400);
		}
	}, [clicked]);

	return (
		<div
			onClick={addToCardHandler}
			className='relative border shadow-lg hover:scale-105 rounded-lg cursor-pointer group transition'
		>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className='flex justify-center items-center h-52 bg-center bg-cover'
			>
				<button
					className={`opacity-0 group-hover:opacity-100 rounded-full p-4 bg-orange-500 ${
						clicked && 'scale-125'
					} text-white border-transparent transition`}
				>
					{clicked ? <IoCheckmark size={30} /> : <AiOutlinePlus size={30} />}
				</button>
			</div>
			<div className='flex items-center justify-between px-2 py-4 gap-1'>
				<p className='font-bold'>{name}</p>
				<p>
					<span className='price'>{price}</span>
				</p>
			</div>
		</div>
	);
};
