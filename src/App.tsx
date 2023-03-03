import { HeadlineCards } from './components/HeadlineCards';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';

function App() {
	return (
		<div className='max-w-[1640px] mx-auto px-4'>
			<Navbar />
			<Hero />
			<HeadlineCards />
			<Menu />
		</div>
	);
}

export default App;
