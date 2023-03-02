import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { MobileMenu } from '../MobileMenu';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuHandle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='gap-5 mb-5 flex justify-between items-center p-4'>
			{/* Left side */}
			<div className='flex items-center gap-3'>
				<div onClick={menuHandle} className='cursor-pointer'>
					<AiOutlineMenu size={30} />
				</div>

				<h1 className='text-2xl sm:text-3xl lg:text-4xl'>
					Best <span className='font-bold'>Eats</span>
				</h1>

				<div className='hidden items-center gap-2 bg-gray-200 rounded-full p-1 text-sm lg:flex'>
					<p className='bg-black text-white rounded-full p-2'>Delivery</p>
					<p>Pickup</p>
				</div>
			</div>

			{/* Search */}
			<div className='flex items-center gap-2 bg-gray-200 rounded-full p-2 w-54 sm:w-[500px]'>
				<AiOutlineSearch size={20} />
				<input
					type='text'
					placeholder='Search foods'
					className='bg-transparent p-1 focus:outline-none rounded-full w-full'
				/>
			</div>

			{/* Cart */}
			<button className='flex items-center gap-2 justify-center bg-black text-white rounded-full py-2'>
				<BsFillCartFill size={20} />
				<p className=''>Cart</p>
			</button>

			{/* Mobile Menu */}
			<MobileMenu menuHandle={menuHandle} isMenuOpen={isMenuOpen} />
		</div>
	);
};
