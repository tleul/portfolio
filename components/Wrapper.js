import Head from 'next/head';
import { Fragment } from 'react';
// import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<title>Tafach Tech</title>
				<meta
					name='google-site-verification'
					content='sK7k4q13AvLy0XoCM2EiKPsNTsvLO68sAvOv8w-IOoY'
				/>
				<link
					rel='stylesheet'
					href='https://bootswatch.com/4/cerulean/bootstrap.min.css'
				/>
				<script
					src='https://kit.fontawesome.com/db873bbd1d.js'
					crossOrigin='anonymous'></script>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>

				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
				<link rel='stylesheet' href='./styles/styles.css' />
			</Head>

			{/* <ToastContainer
        className="alerts"
        bodyClassName="alertb"
        progressClassName="alertp"
        draggable={false}
      /> */}

			<div className='mcontainer'>{children}</div>
		</Fragment>
	);
};

export default Wrapper;
