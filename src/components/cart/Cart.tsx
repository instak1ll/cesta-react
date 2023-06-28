import CartFooter from "../cartFooter/CartFooter";
import CartHeader from "../cartHeader/CartHeader";
import CartProduct from "../cartProduct/CartProduct";
import "./Cart.scss";
import data from "./../../data";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(data);

  const [total, settotal] = useState({
    price: cart.reduce((a, b) => a + b.priceTotal, 0),
    count: cart.reduce((a, b) => a + b.count, 0),
  });

  useEffect(() => {
    settotal({
      price: cart.reduce((a, b) => a + b.priceTotal, 0),
      count: cart.reduce((a, b) => a + b.count, 0),
    });
  }, [cart]);

  const deleteProduct = (id) => {
    console.log("delete", id);
    setCart((cart) => cart.filter((product) => id !== product.id));
  };

  const increase = (id) => {
    console.log("increase", id);
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: (product.count += 1),
            priceTotal: product.count * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    console.log("decrease", id);
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? (product.count -= 1) : 1,
            priceTotal:
              product.count !== 1
                ? (product.priceTotal -= product.price)
                : product.priceTotal,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <CartProduct
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });
  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
