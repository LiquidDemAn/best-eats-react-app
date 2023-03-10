import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useEffect, useState } from 'react';

const slides = [
	{
		url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
		text: 'The Best Food Delivered-1',
	},
	{
		url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		text: 'The Best Food Delivered-2',
	},
	{
		url: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		text: 'The Best Food Delivered-3',
	},

	{
		url: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		text: 'The Best Food Delivered-4',
	},
	{
		url: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		text: 'The Best Food Delivered-5',
	},
];

export const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
	};
	console.log(currentIndex);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const handleSelect = (index: number) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const id = setInterval(handleNext, 5000);

		return () => {
			clearInterval(id);
		};
	});

	return (
		<div className='relative h-[200px] mb-12 group sm:h-[300px] md:h-[500px]'>
			{/* Content */}
			<div
				style={{
					backgroundImage: `url(${slides[currentIndex].url})`,
				}}
				className='w-full h-full bg-center bg-cover duration-300'
			>
				<div className='absolute z-10 pl-5 flex items-center h-full text-gray-200 md:pl-20'>
					<h1 className='w-2/3 text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
						{slides[currentIndex].text}
					</h1>
				</div>
			</div>

			{/* Arrows */}
			<div className='hidden absolute z-20 top-1/2 w-full px-2 justify-between text-white md:group-hover:flex'>
				<button onClick={handlePrev} className='slider-arrow transition'>
					<BsChevronCompactLeft size={25} />
				</button>

				<button onClick={handleNext} className='slider-arrow transition'>
					<BsChevronCompactRight size={25} />
				</button>
			</div>

			{/* Round buttons */}
			<ul className='flex justify-center gap-2 list-none'>
				{slides.map(({ url }, index) => (
					<li key={url}>
						<button
							onClick={() => handleSelect(index)}
							className={`p-1 text-2xl border-transparent ${
								index === currentIndex ? 'text-orange-500 ' : 'text-black'
							}`}
						>
							<RxDotFilled />
						</button>
					</li>
				))}
			</ul>

			{/* Gradient */}
			<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/10 to-black/30'></div>
		</div>
	);
};
