import './App.css';
import { Hero } from './routes/Home/Hero/Hero';
import { Hero2 } from './routes/Home/Hero2/Hero2';
import { Nav } from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='body-wrap'>
				<Hero />
				<Hero2 />
			</div>
		</div>
	);
}

export default App;
