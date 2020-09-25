const Projects = () => {
	return (
		<>
			<div className='projects'>
				<h2>Projects</h2>
				<hr style={{ borderWidth: 10, borderColor: 'black' }} />
				<div className='ecommerce'>
					<br />
					<h3>Shopping App</h3>
					<div className='small-video'>
						<video width='400' height='400' autoplay controls>
							<source
								src='https://leulbucket.s3-us-west-1.amazonaws.com/Screen+Recording+2020-09-24+at+12.43.26+AM.mov'
								type='video/mp4'
							/>
						</video>
					</div>
					<div className='large-video'>
						<video width='700' height='700' autoplay controls>
							<source
								src='https://leulbucket.s3-us-west-1.amazonaws.com/Screen+Recording+2020-09-24+at+12.43.26+AM.mov'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
