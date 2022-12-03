import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Product } from "../../types";
import { urlFor } from "../../utils/client";
import { ProductCard, ProductImg, ProductName, ProductPrice } from "./styles";

interface IProps {
  product: Product;
}

const Product: NextPage<IProps> = ({ product }) => {
  return (
    <>
      <Link href={`/product/${product.slug?.current}`}>
        <ProductCard>
          <ProductImg
            src={urlFor(product.image && product.image[0]).url()}
            alt={product.name}
            width={250}
            height={250}
          />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price}</ProductPrice>
        </ProductCard>
      </Link>
    </>
  );
};

export default Product;
