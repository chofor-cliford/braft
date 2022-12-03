import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { LayoutContainer, Main } from "./styles";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Head>
        <title>Braft</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <Main>{children}</Main>
      <footer>
        <Footer />
      </footer>
    </LayoutContainer>
  );
};

export default Layout;
