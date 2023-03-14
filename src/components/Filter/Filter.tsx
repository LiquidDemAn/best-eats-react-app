type Props = {
	title: string;
	filter: string[];
	active: string;
	handleFilter: (type: string) => void;
};

export const Filter = ({ title, filter, handleFilter, active }: Props) => {
	return (
		<div>
			<h3 className='font-bold text-xl text-gray-700 mb-2'>{title}</h3>
			<div className='flex gap-2 flex-wrap'>
				{filter.map((item) => (
					<button
						onClick={() => handleFilter(item)}
						className={`btn-orange ${
							active === item ? 'bg-orange-600 text-white' : 'btn-orange__hover transition'
						} `}
						key={item}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};
