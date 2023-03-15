import { ChangeEvent, useContext, useMemo, useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { AppContext } from '../../context';
import { menu } from '../../data/data';
import { MenuItemType } from '../../typedef';
import { Cart } from '../Cart';
import { CartItem } from '../CartItem';
import { FoodItem } from '../FoodItem';
import { MobileMenu } from '../MobileMenu';

export const Header = () => {
	const { orders, addToCart } = useContext(AppContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const [filteredOrders, setFilteredOrders] = useState<MenuItemType[]>([]);

	const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value.length >= 3) {
			setFilteredOrders(
				menu.filter((item) => item.name.toLowerCase().includes(value))
			);
		} else {
			setFilteredOrders([]);
		}
	};

	const ordersCount = useMemo(() => {
		return orders.reduce((acc, { count }) => (count ? acc + count : acc), 0);
	}, [orders]);

	const cartHandle = () => {
		setIsCartOpen(!isCartOpen);
	};

	const menuHandle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='gap-5 mb-5 flex justify-between items-center p-2 sm:p-4'>
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
			<div className='relative hidden sm:block w-[500px]'>
				<div className='flex items-center gap-2 bg-gray-200 rounded-full p-2 '>
					<AiOutlineSearch size={20} />
					<input
						type='text'
						onChange={handlerSearch}
						placeholder='Search foods'
						className='bg-transparent p-1 focus:outline-none rounded-full w-full'
					/>
				</div>
				{filteredOrders.length ? (
					<div className='flex flex-col items-center gap-2 absolute z-30 h-72 w-full p-2 bg-white overflow-y-scroll'>
						{filteredOrders.map((item) => (
							<CartItem
								key={item.id}
								item={orders.find((order) => order.id === item.id) || item}
							/>
						))}
					</div>
				) : (
					<></>
				)}
			</div>

			{/* Cart Btn */}
			<button
				onClick={cartHandle}
				className='btn-hover flex items-center gap-2 justify-center bg-black text-white rounded-full py-2'
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
