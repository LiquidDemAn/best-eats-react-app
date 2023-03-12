import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CartItemType } from '../../typedef';
import { CartItem } from '../CartItem';

type Props = {
	orders: CartItemType[];
	isCartOpen: boolean;
	cartHandle: () => void;
};

export const Cart = ({ orders, isCartOpen, cartHandle }: Props) => {
	return (
		<>
			{/* Overlay */}
			{isCartOpen && <div onClick={cartHandle} className='overlay'></div>}

			<div
				className={`fixed w-[320px] p-4 h-screen z-30 top-0 bg-white duration-500 ${
					isCartOpen ? 'right-0' : 'right-[-100%]'
				}`}
			>
				<AiOutlineClose
					onClick={cartHandle}
					size={30}
					className='absolute right-4 top-4 cursor-pointer hover:text-red-400 transition'
				/>
				<h2 className='text-2xl font-bold mb-10'>Cart</h2>
				<div className='flex flex-col gap-4'>
					{orders.map((order) => (
						<CartItem key={order.id} item={order} />
					))}
				</div>
			</div>
		</>
	);
};
