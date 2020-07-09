import Head from "next/head";
import { Fragment } from "react";
// import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Nextjs Uploader</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
       
      </Head>

      {/* <ToastContainer
        className="alerts"
        bodyClassName="alertb"
        progressClassName="alertp"
        draggable={false}
      /> */}

      <div className="mcontainer">{children}</div>
    </Fragment>
  );
};

export default Wrapper;