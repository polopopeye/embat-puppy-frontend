import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from '../app/store';
import Layout from 'components/layout/Layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position="top-center" rtl={false} newestOnTop={false} />
    </Provider>
  );
}
export default MyApp;
