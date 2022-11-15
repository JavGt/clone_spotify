import { TbHeart, TbPictureInPicture } from 'react-icons/tb';

const NowPlayingBar = () => {
	return (
		<div className='col-span-footer row-span-footer w-full bg-[#181818] text-white px-4 h-[90px] grid grid-cols-3 grid-rows-1'>
			<div className='flex items-center'>
				<div className='w-[56px] h-[56px] bg-white'>
					<div
						src='https://i.scdn.co/image/ab67616d00004851d3de03550f715df1ea7e0c08'
						alt='album cover'
						className='w-[56px] h-[56px] object-cover block'
					/>
				</div>

				<div className='mx-[14px] flex flex-col'>
					<a className='text-[0.875rem] font-semibold'>Somebody Else</a>
					<a className='text-[#b3b3b3] text-[0.6875rem] font-medium'>The 1975</a>
				</div>
				<button className='text-lg w-[32px] h-[32px]'>
					<TbHeart />
				</button>
				<button className='text-lg w-[32px] h-[32px]'>
					<TbPictureInPicture />
				</button>
			</div>
			<div> asd</div>
			<div> sad</div>
		</div>
	);
};

export default NowPlayingBar;
