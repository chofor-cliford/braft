import styled, { createGlobalStyle } from "styled-components";

export const GlobalSytles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  }

:root{
  --secondary-color: #f02d34;
  --gray-color: #808080;
  --primary-color: #324d67;
}
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  margin-left: 5px;
  color: #f02d34;
`;

export const HomeHeading = styled.div`
  text-align: center;
  margin: 40px 0px;
  color: var(--primary-color);

  h2 {
    font-size: 40px;
    font-weight: 800;
  }

  p {
    font-size: 16px;
    font-weight: 200;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
`;

export const SuccessContainer = styled.div`
  background-color: #fff;
  min-height: 60vh;
`;

export const SuccessWrapper = styled.div`
  width: 1000px;
  margin: auto;
  margin-top: 160px;
  background-color: #dcdcdc;
  padding: 50px;
  border-radius: 15px;
  display: flex;
  height: 350px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    color: #008000;
    font-size: 40px;
  }

  h2 {
    text-transform: capitalize;
    margin-top: 15px 0px;
    font-weight: 900;
    font-size: 40px;
    color: #324d67;
  }
  p {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
   

    &:nth-child(2) {
      margin: 10px;
      margin-top: 30px;
    }
  }
`;

export const SuccessBtn = styled.button`
  width: 300px;
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
