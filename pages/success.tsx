import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import {
  Anchor,
  SuccessBtn,
  SuccessContainer,
  SuccessWrapper,
} from "../styles/globalstyles";
import { runFireWorks } from "../utils/cofetti";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQty }: any = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQty(0);
    runFireWorks();
  }, [setCartItems, setTotalPrice, setTotalQty]);

  return (
    <SuccessContainer>
      <SuccessWrapper>
        <div>
          <BsBagCheckFill />
        </div>
        <h2>Thank you for your order!</h2>
        <p>Check your email inbox for the reciept</p>
        <p>
          If you have any questions, please email
          <Anchor href="mailto:betterfuture032@gmail.com">
            betterfuture032@gmail.com
          </Anchor>
        </p>
        <Link href="/">
          <SuccessBtn type="button">Continue Shopping</SuccessBtn>
        </Link>
      </SuccessWrapper>
    </SuccessContainer>
  );
};

export default Success;
