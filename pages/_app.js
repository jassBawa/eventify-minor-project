import { store } from "@/store/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
