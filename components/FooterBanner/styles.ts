import Image from 'next/image';
import styled from 'styled-components';

export const FooterBannerContainer = styled.div`
  padding: 100px 40px;
  background-color: var(--secondary-color);
  border-radius: 15px;
  position: relative;
  height: 400px;
  line-height: 1;
  color: #fff;
  width: 100%;
  margin-top: 120px;
`;
  
  export const BannerDesc = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLeft = styled.div`
  h3 {
    font-weight: 900;
    font-size: 80px;
    margin-left: 25px;
  }

  p {
    margin: 18px;
  }
`;

export const FooterRight = styled.div`
  line-height: 1.4;

  h3 {
    font-weight: 800;
    font-size: 60px;
  }

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 960px){
    line-height: 1.1;
  }
`;

export const BannerButton = styled.div`
  border-radius: 15px;
  padding: 10px 16px;
  background-color: white;
  color: #ff0000;
  border: none;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export const BannerImgContainer = styled.div`
  position: absolute;
  top: -25%;
  left: 25%;
  height: 100%;
  width: 450px;
`;

export const CompanyDesc = styled.div`
  font-size: 14px;
  font-weight: 300;
`;