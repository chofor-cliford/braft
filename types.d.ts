export interface Product {
  image: {
    asset: {
      url: string;
    };
  }[];
  name: string;
  slug: {
    current: string;
  };
  price: number;
  details: string;
  _id: string;
}

export interface Banner {
  image: {
    asset: {
      url: string;
    };
  };
  buttonText: string;
  product: string;
  _id: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
};
