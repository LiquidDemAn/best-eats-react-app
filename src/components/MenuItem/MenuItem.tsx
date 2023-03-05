import { MenuItemType } from '../../typedef';

type Props = {
	item: MenuItemType;
};

export const MenuItem = ({ item }: Props) => {
	const { name, price, image } = item;

	return (
		<div className='border w-full shadow-lg hover:scale-105 transition rounded-lg cursor-pointer'>
			<img
				className='w-full h-52 object-cover rounded-t-lg '
				src={image}
				alt={name}
			/>
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
