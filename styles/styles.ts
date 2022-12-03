import styled, { keyframes } from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 40px;
  margin-top: 60px;
  color: #324d67;
`;

export const ProductDetailImgContainer = styled.div`
  border-radius: 15px;
  background-color: #ebebeb;
  width: 400px;
  height: 400px;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #f02d34;
  }
`;

export const SmallImgContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const SmallImg = styled.div<{ isSelect: boolean }>`
  border-radius: 8px;
  background-color: ${({ isSelect }) => (isSelect ? "#f02d34" : "#ebebeb")};
  width: 70px;
  height: 70px;
  position: relative;
  cursor: pointer;
`;

export const ProductDetailDesc = styled.div`
  h4 {
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
  }
`;

export const Reviews = styled.div`
  color: var(--secondary-color);
  margin-top: 10px;
  display: flex;
  gap: 5px;
  align-items: center;

  p {
    color: #324d67;
    margin-top: 0px;
  }
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 26px;
  margin-top: 30px;
  color: var(--secondary-color);
`;

export const Qty = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  align-items: center;
`;

export const QtyDesc = styled.p`
  border: 1px solid gray;
  padding: 0 6px;
  display: flex;
`;

export const Minus = styled.span`
  border-right: 1px solid gray;
  color: #f02d34;
  font-size: 16px;
  padding: 12px;
  cursor: pointer;
`;

export const Plus = styled.span`
  font-size: 16px;
  padding: 12px;
  cursor: pointer;
  color: rgb(49, 168, 49);
`;

export const Num = styled.span`
  border-right: 1px solid gray;
  font-size: 20px;
  font-size: 16px;
  padding: 12px;
  cursor: pointer;
`;

export const ProductDetailButtons = styled.div`
  display: flex;
  gap: 30px;
`;

export const AddToCart = styled.button`
  padding: 10px 20px;
  border: 1px solid #f02d34;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  background-color: white;
  color: #f02d34;
  cursor: pointer;
  width: 200px;
  transform: scale(1, 1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const BuyNow = styled.button`
  width: 200px;
  padding: 10px 20px;
  background-color: #f02d34;
  color: white;
  border: none;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const MayAlsoLike = styled.div`
  margin-top: 120px;

  h2 {
    text-align: center;
    margin: 50px;
    color: #324d67;
    font-size: 28px;
  }
`;

export const Marquee = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  overflow-x: hidden;
`;

export const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const MayAlsoLikeProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  will-change: transform;
  animation: ${marquee} 15s linear infinite;
  width: 180%;

  &:hover{
    animation-play-state: paused;
  }
`;
