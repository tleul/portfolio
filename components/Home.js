import SkillShuffler from './Titlehome';

const Home = () => {
	return (
		<div className='protoflio-home'>
			<div className='top-title'>
				<h3>
					Welcome In!!
					<br />
					This is Leul, T
					<br />I am Fullstack software Developer!
				</h3>
			</div>

			<div className='shuffle'>
				<SkillShuffler />
			</div>
		</div>
	);
};
export default Home;
