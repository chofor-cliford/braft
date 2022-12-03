import { NextPage } from "next";
import React from "react";
import FooterBanner from "../components/FooterBanner/FooterBanner";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Products from "../components/Product/Product";
import { HomeHeading, HomeContainer } from "../styles/globalstyles";
import { Banner, Product } from "../types";
import { client } from "../utils/client";

interface IProps {
  products: Product[];
  bannerData: Banner;
}

const Home: NextPage<IProps> = ({ bannerData, products }) => {
  console.log("Product: " + { ...products });
  return (
    <>
      <HeroBanner heroData={bannerData && bannerData} />
      <HomeHeading>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </HomeHeading>
      <HomeContainer>
        {products.map((product) => (
          <Products product={product} key={product._id} />
        ))}
      </HomeContainer>
      <FooterBanner footerData={bannerData && bannerData} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"][0]`;
  const bannerData = await client.fetch(bannerQuery);
  
  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
