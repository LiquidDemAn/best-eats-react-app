import { AiOutlineClose } from 'react-icons/ai';
import { CartItemType } from '../../typedef';
import { CartItem } from '../CartItem';
import { GiShoppingCart } from 'react-icons/gi';
import { useMemo } from 'react';

type Props = {
	orders: CartItemType[];
	isCartOpen: boolean;
	cartHandle: () => void;
};

export const Cart = ({ orders, isCartOpen, cartHandle }: Props) => {
	const orderPrices = useMemo(() => {
		return Object.entries(
			orders.reduce<{ [key: string]: number }>((acc, { price, count }) => {
				if (!acc[price]) {
					acc[price] = count;
				} else {
					acc[price] = acc[price] + count;
				}
				return acc;
			}, {})
		);
	}, [orders]);

	return (
		<>
			{/* Overlay */}
			{isCartOpen && <div onClick={cartHandle} className='overlay'></div>}

			<div
				className={`fixed w-[320px] sm:w-96 flex flex-col gap-6 p-4 h-screen z-30 top-0 bg-white duration-500 ${
					isCartOpen ? 'right-0' : 'right-[-100%]'
				}`}
			>
				<AiOutlineClose
					onClick={cartHandle}
					size={30}
					className='absolute right-4 top-4 cursor-pointer hover:text-red-400 transition'
				/>
				<h2 className='text-2xl font-bold'>Cart</h2>
				{orders.length ? (
					<>
						<div className='flex flex-grow flex-col gap-4 overflow-auto'>
							{orders.map((order) => (
								<CartItem key={order.id} item={order} />
							))}
						</div>
						<div className='flex justify-between gap-1'>
							<span>Prices:</span>
							<ul className='flex gap-4 justify-between'>
								{orderPrices.map((item) => (
									<li key={item[0]}>
										<span className='price'>{item[0]}</span>=
										<span>{item[1]}</span>
									</li>
								))}
							</ul>
						</div>
						<button className='btn-orange btn-orange__hover transition'>
							Order
						</button>
					</>
				) : (
					<div className='flex flex-grow justify-center flex-col items-center'>
						<GiShoppingCart color='orange' size={100} />
						<p className='flex font-semibold text-xl text-center'>
							Cart is Empty. <br /> Select any item please!
						</p>
					</div>
				)}
			</div>
		</>
	);
};
