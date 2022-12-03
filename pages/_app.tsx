import { useState, useEffect } from "react";
import { GlobalSytles } from "../styles/globalstyles";
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <GlobalSytles />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
};
export default MyApp;
