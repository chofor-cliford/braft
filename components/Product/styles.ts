import Image from "next/image";
import styled from "styled-components";

export const ProductCard = styled.div`
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
  color: #324d67;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const ProductImg = styled(Image)`
  border-radius: 15px;
  background-color: #ebebeb;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
`;

export const ProductName = styled.p`
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  font-weight: 800;
  margin-top: 6px;
  color: #000;
`; 
