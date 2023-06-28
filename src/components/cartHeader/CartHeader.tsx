import "./CartHeader.scss";

const CartHeader = () => {
  return (
    <header className="cart-header">
      <div className="cart-header__title">name</div>
      <div className="cart-header__count">quantity</div>
      <div className="cart-header__cost">price</div>
    </header>
  );
};

export default CartHeader;
