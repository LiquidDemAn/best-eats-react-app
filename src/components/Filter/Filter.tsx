import React from 'react';

export type FilterType = {
	id: number;
	item: string;
};

type Props = {
	title: string;
	filter: FilterType[];
	active: string;
	handleFilter: (type: string) => void;
};

export const Filter = ({ title, filter, handleFilter, active }: Props) => {
	return (
		<div>
			<h3 className='font-bold text-xl text-gray-700 mb-2'>{title}</h3>
			<div className='flex gap-2 flex-wrap'>
				{filter.map(({ id, item }) => (
					<button
						onClick={() => handleFilter(item)}
						className={`filter-btn ${
							active === item ? 'bg-orange-600 text-white' : 'btn-hover'
						} `}
						key={id}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};
