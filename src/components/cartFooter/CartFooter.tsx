import "./CartFooter.scss";
import priceForm from "./../utils/priceForm";

interface CartFooterProps {
  total: {
    count: number;
    price: number;
  };
}

const CartFooter: React.FC<CartFooterProps> = ({ total }) => {
  const { count, price } = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} units</div>
      <div className="cart-footer__price">{priceForm.format(price)} $.</div>
    </footer>
  );
};

export default CartFooter;
