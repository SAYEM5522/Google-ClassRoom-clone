import './css/styles.css';
import store from "../pages/app/store";
import { Provider } from 'react-redux'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
     <Component {...pageProps} />
    </Provider>
  )
}