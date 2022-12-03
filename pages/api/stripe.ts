import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1MB0RdAZ5Tht9t5I9SLRApiA" },
          { shipping_rate: "shr_1MB0TOAZ5Tht9t5IO2osXUry" },
        ],
        line_items: req.body.cartItems.map((item: any) => {
          const img = item.image[0].asset._ref;
          const newImg = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/xky71glr/production/"
            )
            .replace(
              "-webp",
              ".webp" || "-jpg",
              ".jpg" || "-png",
              ".png" || "-jpeg",
              ".jpeg"
            );
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImg],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
