import { Category } from './components/Category';
import { HeadlineCards } from './components/HeadlineCards';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Header } from './components/Header';

function App() {
	return (
		<div className='max-w-[1640px] mx-auto px-4'>
			<Header />
			<Hero />
			<HeadlineCards />
			<Menu />
			<Category />
		</div>
	);
}

export default App;
