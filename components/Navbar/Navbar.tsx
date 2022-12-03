import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/Cart";
import { CartIcon, CartQty, Logo, NavContainer } from "./styles";

const Navbar = () => {
  const { showCart, setShowCart, totalQty }: any = useStateContext();
  return (
    <NavContainer>
      <Link href="/">
        <Logo>Braft</Logo>
      </Link>

      <CartIcon type="button" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <CartQty>{totalQty}</CartQty>
      </CartIcon>

      {showCart && <Cart />}
    </NavContainer>
  );
};

export default Navbar;
