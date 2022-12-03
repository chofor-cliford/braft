import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Banner } from "../../types";
import { urlFor } from "../../utils/client";
import {
  Beats,
  Desc,
  HeroBannerContainer,
  HeroButton,
  HeroImg,
} from "./styles";

const HeroBanner = ({ heroData }: { heroData: Banner }) => {
  return (
    <HeroBannerContainer>
      <div>
        <Beats>{heroData.smallText}</Beats>
        <h3>{heroData.midText}</h3>
        <h1>{heroData.largeText1}</h1>
        <HeroImg>
          <Image
            src={heroData.image && urlFor(heroData.image).url()}
            alt={heroData.product}
            layout="fill"
          />
        </HeroImg>
        <div>
          <Link href={`/product/${heroData.product}`}>
            <HeroButton type="button">{heroData.buttonText}</HeroButton>
          </Link>
          <Desc>
            <h5>Description</h5>
            <p>{heroData.desc}</p>
          </Desc>
        </div>
      </div>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
