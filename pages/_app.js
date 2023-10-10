import Loader from "@/components/layout/Loader";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeline = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimeline);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Provider store={store}>
          <Toaster />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Provider>
      )}
    </>
  );
}
