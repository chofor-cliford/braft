import styled from 'styled-components';

export const HeroBannerContainer = styled.div`
  padding: 100px 40px;
  background-color: #dcdcdc;
  border-radius: 15px;
  position: relative;
  height: 500px;
  line-height: 0.9;
  width: 100%;

  h1 {
    color: #fff;
    font-size: 10em;
    margin-left: -20px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 4rem;
    margin-top: 4px;
  }

  p {
    font-size: 20px;
  }
`;

export const HeroButton = styled.button`
  margin-top: 40px;
  z-index: 10000;
  border-radius: 15px;
  padding: 10px 16px;
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export const Beats = styled.p`
  font-size: 20px;
`;

export const HeroImg = styled.div`
  position: absolute;
  top: 0%;
  right: 20%;
  width: 450px;
  height: 450px;
`;

export const Desc = styled.div`
  position: absolute;
  right: 10%;
  bottom: 5%;
  width: 300px;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  color: #324d67;

  p {
    color: #5f5f5f;
    font-weight: 100;
    text-align: end;
  }

  h5 {
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 16px;
    align-self: flex-end;
  }
`;