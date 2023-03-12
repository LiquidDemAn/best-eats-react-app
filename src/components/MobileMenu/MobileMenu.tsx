import { AiFillTag, AiOutlineClose } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { BsFillSaveFill } from 'react-icons/bs';

const list = [
	{
		id: 1,
		text: 'Orders',
		icon: <TbTruckDelivery size={25} />,
	},
	{
		id: 2,
		text: 'Favorites',
		icon: <MdFavorite size={25} />,
	},
	{
		id: 3,
		text: 'Wallet',
		icon: <FaWallet size={25} />,
	},
	{
		id: 4,
		text: 'Help',
		icon: <MdHelp size={25} />,
	},
	{
		id: 5,
		text: 'Promotions',
		icon: <AiFillTag size={25} />,
	},
	{
		id: 6,
		text: 'Best One',
		icon: <BsFillSaveFill size={25} />,
	},
	{
		id: 5,
		text: 'Invite Friends',
		icon: <FaUserFriends size={25} />,
	},
];

type Props = {
	menuHandle: () => void;
	isMenuOpen: boolean;
};

export const MobileMenu = ({ menuHandle, isMenuOpen }: Props) => {
	return (
		<>
			{/* Overlay */}
			{isMenuOpen && <div onClick={menuHandle} className='overlay'></div>}

			{/* Menu */}
			<div
				className={`fixed w-[320px] h-screen z-30 top-0 left-0 bg-white duration-500 ${
					isMenuOpen ? 'left-0' : 'left-[-100%]'
				}`}
			>
				<AiOutlineClose
					onClick={menuHandle}
					size={30}
					className='absolute right-4 top-4 cursor-pointer hover:text-red-400 transition-all duration-300'
				/>
				<h2 className='text-2xl p-4'>
					Best <span className='font-bold'>Eats</span>
				</h2>

				<nav className='mt-6'>
					<ul className='flex flex-col gap-5 text-gray-800'>
						{list.map(({ id, icon, text }) => (
							<li
								key={id}
								className='px-4 py-2 flex items-center gap-4 text-xl cursor-pointer transition-all hover:bg-gray-300 duration-300'
							>
								{icon}
								{text}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};
