import { useEffect, useState } from "react";
import CartFooter from "../cartFooter/CartFooter";
import CartHeader from "../cartHeader/CartHeader";
import CartProduct from "../cartProduct/CartProduct";
import "./Cart.scss";
import data from "./../../data";

const Cart = () => {
  const [cart, setCart] = useState(data);

  type Total = {
    price: number;
    count: number;
  };

  const [total, setTotal] = useState<Total>({
    price: cart.reduce((a, b) => a + b.priceTotal, 0),
    count: cart.reduce((a, b) => a + b.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((a, b) => a + b.priceTotal, 0),
      count: cart.reduce((a, b) => a + b.count, 0),
    });
  }, [cart]);

  const deleteProduct = (id: number) => {
    console.log("delete", id);
    setCart((prevCart) => prevCart.filter((product) => id !== product.id));
  };

  const increase = (id: number) => {
    console.log("increase", id);
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      })
    );
  };

  const decrease = (id: number) => {
    console.log("decrease", id);
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          const newCount = Math.max(product.count - 1, 1);
          const newPriceTotal =
            newCount !== 1 ? newCount * product.price : product.priceTotal;
          return {
            ...product,
            count: newCount,
            priceTotal: newPriceTotal,
          };
        }
        return product;
      })
    );
  };

  const changeValue = (id: number, value: number) => {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      })
    );
  };

  const products = cart.map((product) => (
    <CartProduct
      product={product}
      key={product.id}
      deleteProduct={deleteProduct}
      increase={increase}
      decrease={decrease}
      changeValue={changeValue}
    />
  ));

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
