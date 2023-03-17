import { ChangeEvent, useContext, useMemo, useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { AppContext } from '../../context';
import { menu } from '../../data/data';
import { MenuItemType } from '../../typedef';
import { Cart } from '../Cart';
import { CartItem } from '../CartItem';
import { MobileMenu } from '../MobileMenu';

export const Header = () => {
	const { orders } = useContext(AppContext);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [foundOrders, setFoundOrders] = useState<MenuItemType[] | null>(null);

	const ordersCount = useMemo(() => {
		return orders.reduce((acc, { count }) => (count ? acc + count : acc), 0);
	}, [orders]);

	const searchHandle = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value) {
			setFoundOrders(
				menu.filter((item) => item.name.toLowerCase().includes(value))
			);
		} else {
			setFoundOrders(null);
		}
	};

	const cartHandle = () => {
		setIsCartOpen(!isCartOpen);
	};

	const menuHandle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='flex justify-between items-center gap-5 mb-5 p-2 sm:p-4'>
			{/* Left side */}
			<div className='flex items-center gap-3'>
				<div onClick={menuHandle} className='cursor-pointer'>
					<AiOutlineMenu size={30} />
				</div>

				<h1 className='hidden md:block md:text-xl lg:text-2xl'>
					Best <span className='font-bold'>Eats</span>
				</h1>
			</div>

			{/* Search */}
			<div className='relative hidden sm:block w-96'>
				<div className='flex items-center gap-2 p-2 bg-gray-200 rounded-full'>
					<AiOutlineSearch size={20} />
					<input
						type='text'
						onChange={searchHandle}
						placeholder='Search foods'
						className='p-1 bg-transparent focus:outline-none'
					/>
				</div>

				{foundOrders ? (
					<div className='max-h-72 w-full absolute z-30 flex flex-col items-center gap-2 p-2 bg-white overflow-y-scroll'>
						{foundOrders.length ? (
							<>
								{foundOrders.map((item) => (
									<CartItem
										key={item.id}
										item={orders.find((order) => order.id === item.id) || item}
									/>
								))}
							</>
						) : (
							<>No products found</>
						)}
					</div>
				) : (
					<></>
				)}
			</div>

			{/* Cart Btn */}
			<button
				onClick={cartHandle}
				className='flex items-center justify-center gap-2 py-2 bg-black text-white rounded-full btn-hover'
			>
				<BsFillCartFill size={20} />
				<p>Cart</p>
				<p>({ordersCount})</p>
			</button>

			{/* Mobile Menu */}
			<MobileMenu menuHandle={menuHandle} isMenuOpen={isMenuOpen} />

			{/* Cart */}
			<Cart orders={orders} isCartOpen={isCartOpen} cartHandle={cartHandle} />
		</div>
	);
};
