import React, { useRef } from "react";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import axios from "axios";
import { useStateContext } from "../../context/StateContext";
import getStripe from "../../utils/getStripe";
import {
  ContinueShop,
  CartButton,
  CartContainer,
  CartWrapper,
  EmptyCart,
  FillCartContainer,
  FillCart,
  FillCartImg,
  ItemDescTop,
  ItemDescBottom,
  Remove,
  CartBottom,
  Total,
  BtnContainer,
} from "./styles";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../utils/client";
import { Product } from "../../types";
import { Minus, Num, Plus, QtyDesc } from "../../pages/product/styles";

const Cart = () => {
  const cartRef = useRef<any>();
  const {
    totalQty,
    totalPrice,
    cartItems,
    setShowCart,
    toggleCartItemQty,
    onRemove,
  }: any = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const res: any = await axios.post("/api/stripe", { cartItems });

    if (res.statusCode === 500) return;

    const { data } = res;
  
    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartContainer ref={cartRef}>
      <CartWrapper>
        <CartButton type="button" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span>Your Cart</span>
          <span>{totalQty} items</span>
        </CartButton>

        {cartItems.length < 1 && (
          <EmptyCart>
            <AiOutlineShopping size={150} />
            <h3>Your Shopping bag is empty</h3>
            <Link href="/">
              <ContinueShop type="button" onClick={() => setShowCart(false)}>
                Continue Shopping
              </ContinueShop>
            </Link>
          </EmptyCart>
        )}
        <FillCartContainer>
          {cartItems.length >= 1 &&
            cartItems.map((item: any) => (
              <FillCart key={item._id}>
                <FillCartImg>
                  <Image
                    src={urlFor(item.image && item.image[0]).url()}
                    alt={item.name}
                    layout="fill"
                  />
                </FillCartImg>
                <div>
                  <ItemDescTop>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </ItemDescTop>
                  <ItemDescBottom>
                    <div>
                      <QtyDesc>
                        <Minus
                          onClick={() => toggleCartItemQty(item._id, "dec")}
                        >
                          <AiOutlineMinus />
                        </Minus>
                        <Num>{item.quantity}</Num>
                        <Plus
                          onClick={() => toggleCartItemQty(item._id, "inc")}
                        >
                          <AiOutlinePlus />
                        </Plus>
                      </QtyDesc>
                    </div>
                    <Remove type="button" onClick={() => onRemove(item)}>
                      <TiDeleteOutline />
                    </Remove>
                  </ItemDescBottom>
                </div>
              </FillCart>
            ))}
        </FillCartContainer>
        {cartItems.length >= 1 && (
          <CartBottom>
            <Total>
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </Total>
            <BtnContainer>
              <button type="button" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </BtnContainer>
          </CartBottom>
        )}
      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;
