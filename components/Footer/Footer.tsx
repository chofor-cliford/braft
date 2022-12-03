import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>2022 Braft All rights reserved</p>
      <p>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </FooterContainer>
  );
};

export default Footer;
