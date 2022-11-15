import { NavBar } from '../NavBar';
import { MainView } from '../MainView';
import { NowPlayingBar } from '../NowPlayingBar';

const Main = () => {
	return (
		<div className='grid grid-cols-layout grid-rows-layout h-full w-full overflow-hidden max-h-screen bg-[#121212]'>
			<NavBar />
			<MainView />
			<NowPlayingBar />
		</div>
	);
};

export default Main;
