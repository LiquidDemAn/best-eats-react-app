import { HeadlineCards } from './components/HeadlineCards';
import { Hero } from './components/Hero';
import { FoodMenu } from './components/FoodMenu';
import { Header } from './components/Header';
import { Categories } from './components/Categories';

function App() {
	return (
		<div className='max-w-[1640px] mx-auto px-4'>
			<Header />
			<Hero />
			<HeadlineCards />
			<FoodMenu />
			<Categories />
		</div>
	);
}

export default App;
