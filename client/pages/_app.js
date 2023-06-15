import Header from "src/components/Header/Header";
import Head from "next/head";
import { Provider } from "react-redux";
import Modals from "src/components/Modals";
// import css

import "../public/css/style.scss";

import store from "src/store/store";
import { useEffect } from "react";
import { getProfile } from "src/store/authSlice";
import Copyright from "../src/components/Copyright/Copyright";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(getProfile());
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <title>LE PUBLICATEUR LÉGAL</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Copyright />
      <Modals />
    </Provider>
  );
}
