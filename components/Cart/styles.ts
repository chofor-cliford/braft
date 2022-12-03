import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  transition: all 1s ease-in-out;
`;

export const CartWrapper = styled.div`
  height: 100vh;
  width: 600px;
  background-color: white;
  float: right;
  padding: 40px 10px;
  position: relative;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  gap: 2px;
  margin-left: 10px;
  margin-top: 35px;
  border: none;
  background-color: transparent;

  span {
    margin-left: 10px;

    &:nth-child(2) {
      color: #f02d34;
    }
  }
`;

export const EmptyCart = styled.div`
  margin: 40px;
  text-align: center;

  h3 {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const ContinueShop = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 10px 12px;
  border-radius: 15px;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  margin-top: 40px;
  text-transform: uppercase;
  background-color: #f02d34;
  color: #fff;
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const FillCartContainer = styled.div`
  margin-top: 15px;
  overflow: auto;
  max-height: 70vh;
  padding: 20px 10px;
`;

export const FillCart = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
`;

export const FillCartImg = styled.div`
  width: 180px;
  position: relative;
  height: 150px;
  border-radius: 15px;
  background-color: #ebebeb;
`;

export const ItemDescTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  color: #324d67;
  flex-wrap: wrap;
  gap: 10px;

  h4 {
  }
  font-size: 20px;
  color: black;

  h5 {
    font-size: 24px;
    color: #324d67;
  }
`;

export const ItemDescBottom = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  width: 350px;
  color: #324d67;
`;

export const Remove = styled.button`
  font-size: 24px;
  color: #f02d34;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const CartBottom = styled.div`
  position: absolute;
  bottom: 12px;
  right: 5px;
  width: 100%;
  padding: 30px 65px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 22px;
  }
`;

export const BtnContainer = styled.div`
  width: 400px;
  margin: auto;

  button {
    width: 100%;
    max-width: 400px;
    padding: 10px 12px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    margin-top: 40px;
    text-transform: uppercase;
    background-color: #f02d34;
    color: #fff;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
`;
