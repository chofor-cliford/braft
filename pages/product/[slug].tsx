import React, { useState } from "react";
import { NextPage } from "next";
import { client, urlFor } from "../../utils/client";
import { Product } from "../../types";
import {
  ProductDetailContainer,
  SmallImgContainer,
  ProductDetailImgContainer,
  SmallImg,
  ProductDetailDesc,
  Reviews,
  Price,
  Qty,
  QtyDesc,
  Minus,
  Num,
  Plus,
  ProductDetailButtons,
  AddToCart,
  BuyNow,
  MayAlsoLike,
  Marquee,
  MayAlsoLikeProduct,
} from "./styles";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import Products from "../../components/Product/Product";
import { useStateContext } from "../../context/StateContext";

interface IProps {
  product: Product;
  similarProducts: Product[];
}

const ProductDetail: NextPage<IProps> = ({ product, similarProducts }) => {
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd, setShowCart }: any = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <ProductDetailContainer>
      <div>
        <ProductDetailImgContainer>
          <Image
            src={urlFor(product?.image && product?.image[index]).url()}
            alt={product.name}
            layout="fill"
          />
        </ProductDetailImgContainer>
        <SmallImgContainer>
          {product.image.map((item, i): any => (
            <SmallImg key={i} isSelect={i === index ? true : false}>
              <Image
                src={urlFor(item).url()}
                alt="images"
                layout="fill"
                onMouseEnter={() => setIndex(i)}
              />
            </SmallImg>
          ))}
        </SmallImgContainer>
      </div>
      <ProductDetailDesc>
        <h1>{product.name}</h1>
        <Reviews>
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </>
          <p>(20)</p>
        </Reviews>
        <h4>Details: </h4>
        <p>{product.details}</p>
        <Price>${product.price}</Price>
        <Qty>
          <h3>Quantity: </h3>
          <QtyDesc>
            <Minus onClick={decQty}>
              <AiOutlineMinus />
            </Minus>
            <Num>{qty}</Num>
            <Plus onClick={incQty}>
              <AiOutlinePlus />
            </Plus>
          </QtyDesc>
        </Qty>
        <ProductDetailButtons>
          <AddToCart type="button" onClick={() => onAdd(product, qty)}>
            Add to Cart
          </AddToCart>
          <BuyNow type="button" onClick={handleBuyNow}>
            Buy Now
          </BuyNow>
        </ProductDetailButtons>
      </ProductDetailDesc>
      <MayAlsoLike>
        <h2>You May Also like</h2>
        <Marquee>
          <MayAlsoLikeProduct>
            {similarProducts.map((item) => (
              <Products key={item._id} product={item} />
            ))}
          </MayAlsoLikeProduct>
        </Marquee>
      </MayAlsoLike>
    </ProductDetailContainer>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product" ]{
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: { slug: product.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const productsQuery = `*[_type == "product" && slug.current != '${slug}']`;
  const similarProducts = await client.fetch(productsQuery);

  return {
    props: {
      product,
      similarProducts,
    },
  };
};

export default ProductDetail;
