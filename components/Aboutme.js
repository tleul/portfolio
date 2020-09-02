const Aboutme = () => {
	return (
		<>
			<div className='aboutme'>
				<h2>About Me</h2>
				<img
					className='desktop-img'
					width='200'
					height='200'
					style={{ float: 'left' }}
					src='/check.jpg'
					alt=''
				/>
				<img
					className='mobile-img'
					width='100'
					height='100'
					style={{ float: 'right' }}
					src='/check.jpg'
					alt=''
				/>
				<p>
					Hi, I'm Leul a self-taught, design thinking full-stack
					JavaScript developer with a passion for an Excellent design.
					I live in San Francisco California. I'm an absolute geek and
					love geeking out on all things JavaScript. First fell in
					love with web development 7 years ago when I was doing my
					BSC in Computer Engineering, simply because it made my
					creativity alive. Since then I have been hooked. Although my
					focus, for now, is heavily in both frontend and backend web
					development. My favorite development stack at the moment is
					MERN (MongoDB Express React Nodejs). Values I hold high are
					loyalty, reliability, authenticity and helping others
					achieve their success. Which is why I see projects through
					to the end and why I believe in not only creating beautiful
					software but also reliable and reflect the client's brand
					and that is easy to use so that it does not distract the
					user experience Whether it’s creating servers in Node,
					connecting to MongoDB databases or designing unique user
					experiences per device whilst still maintaining a consistent
					brand experience I will bring your ideas to life.
				</p>
			</div>
		</>
	);
};

export default Aboutme;
