import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 18px;
  position: relative;
`;

export const Logo = styled.p`
  color: #808080;
  font-size: 18px;
  cursor: pointer;
`;
export const CartIcon = styled.button`
  color: gray;
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease;
  border: none;
  background-color: transparent;

  svg {
    font-size: 25px;
  }

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const CartQty = styled.span`
  position: absolute;
  right: -8px;
  font-size: 12px;
  color: #eee;
  background-color: var(--secondary-color);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  font-weight: 600;
`;
