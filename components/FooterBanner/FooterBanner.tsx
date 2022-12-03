import React from "react";
import { NextPage } from "next";
import Image  from 'next/image';
import { Banner } from "../../types";
import {
  BannerButton,
  BannerDesc,
  BannerImgContainer,
  FooterBannerContainer,
  FooterLeft,
  FooterRight,
} from "./styles";
import Link from "next/link";
import { urlFor } from "../../utils/client";

interface IProps {
  footerData: Banner;
}

const FooterBanner: NextPage<IProps> = ({ footerData }) => {
  return (
    <FooterBannerContainer>
      <BannerDesc>
        <FooterLeft>
          <p>{footerData.discount}</p>
          <h3>{footerData.largeText1}</h3>
            <h3>{footerData.largeText2}</h3>
          <p>{footerData.saleTime}</p>
        </FooterLeft>
        <FooterRight>
          <p>{footerData.smallText}</p>
          <h3>{footerData.midText}</h3>
          <p>{footerData.desc}</p>
          <Link href={`/product/${footerData.product}`}>
            <BannerButton>{footerData.buttonText}</BannerButton>
          </Link>
        </FooterRight>
        <BannerImgContainer>    
        <Image src={urlFor(footerData.image).url()} alt={footerData.desc} layout='fill'/>
        </BannerImgContainer>
      </BannerDesc>
    </FooterBannerContainer>
  );
};

export default FooterBanner;
